import React from 'react';
import styled from 'styled-components';
import { CfdbData, importantCfdbFields, PriceObs, useCfdbData, usePricesObsData } from '../PageContext';

const Container = styled.section`
  & input[type="file"] {
    height: fit-content;
    padding: 1rem;
  }

  & .content {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    flex-wrap: wrap;
  
    & .column {
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      gap: 0.5rem;
    }
  }
`;

const { format: ppNumber } = new Intl.NumberFormat('en-US');

const FileForm = <Data extends PriceObs | CfdbData,>({
  id,
  text,
  fileType,
  buttonLabel,
  onSubmit
}: {
  id: string;
  text: React.ReactNode;
  fileType: 'csv' | 'json';
  buttonLabel: string;
  onSubmit: (data: Data[]) => void;
}) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [uploadedData, setUploadedData] = React.useState<Data[]>();

  return (
    <form 
      className="column" 
      id={id} 
      ref={formRef}
      onSubmit={e => {
        e.preventDefault();
        if (uploadedData) {
          onSubmit(uploadedData);
          setUploadedData(undefined);
          
          formRef.current?.reset();
        }
      }}>
      <p>{text}</p>
      <input
        type="file" 
        accept={`.${fileType}`}
        onChange={e => {
          e.preventDefault();
          const file = e.target.files?.item(0);
          if (!file) return;

          const reader = new FileReader();
          reader.readAsText(file);
          reader.onload = e => {
            const data = e.target?.result;
            let json: Data[] = [];
            if (typeof data !== 'string') return;

            if (fileType === 'csv') {
              // @ts-ignore
              json = data
                .split('\n')
                .filter(Boolean)
                .map(line => line.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/))
                .slice(1)
                .map(entry => {
                  const [date, brand, product, price, weight, store, address] = entry;
                  return {
                    date,
                    brand,
                    product,
                    price: Math.round(Number(price) * 10_000) / 10_000,
                    weight: Number(weight),
                    store,
                    address
                  };
                }) as Data[]
              ;
            } else {
              const fieldsToKeep = new Set<string>(importantCfdbFields);
              json = JSON.parse(data).map((entry: Data) => 
                Object.fromEntries(
                  Object.entries(entry).filter(([key]) => fieldsToKeep.has(key))
                )
              );
            }

            setUploadedData(json);
          };
        }}
      />
      <button 
        type="submit"
        disabled={!uploadedData}
      >
        {uploadedData?.length
          ? `import ${ppNumber(uploadedData.length)} ${buttonLabel} rows`
          : `import ${buttonLabel} data (${fileType})`
        }
      </button>
    </form>
  );
};

const ImportSection = () => {
  const { data: obsData, setData: setObsData } = usePricesObsData();
  const { data: cfdbData, setData: setCfdbData } = useCfdbData();

  const sectionId = React.useId();

  return (
    <Container>
      <h2>Import data</h2>
      <div className="content">
        <FileForm<PriceObs>
          id={`${sectionId}_obs-data`} 
          text={`${obsData.length} price observations currently loaded.`}
          fileType="csv"
          buttonLabel="past observation"
          onSubmit={data => setObsData(data)}
        />
        <FileForm<CfdbData>
          id={`${sectionId}_cfdb-data`} 
          text={
            cfdbData.length 
              ? `CFDB data already loaded (${ppNumber(cfdbData.length)} rows)` 
              : (<>CFDB data is <b>not</b> currently loaded.</>)
          }
          fileType="json"
          buttonLabel="cfdb"
          onSubmit={data => setCfdbData(data)}
        />
      </div>
    </Container>
  );
};

export default ImportSection;
