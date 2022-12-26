import React from 'react';
import styled from 'styled-components';
import { CfdbData, PriceObs, useCfdbData, usePricesObsData } from '../PageContext';

const Container = styled.section`
  & input[type="file"] {
    height: fit-content;
    padding: 1rem;
  }

  & .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;
  
    & .column {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      gap: 0.5rem;
    }
  }
`;

const { format: ppNumber } = new Intl.NumberFormat('en-US');

const FileForm = <Data,>({
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
  const [uploadedData, setUploadedData] = React.useState<Data[]>();

  return (
    <form className="column" id={id}>
      <p>{text}</p>
      <input
        name="file"
        type="file" 
        accept={`.${fileType}`}
        onChange={e => {
          e.preventDefault();
          const file = e.target.files?.item(0);
          if (!file) return;

          const reader = new FileReader();
          reader.readAsText(file);
          reader.onload = (e) => {
            const data = e.target?.result;
            if (typeof data !== 'string') return;

            const json: Data[] = JSON.parse(data);
            
            setUploadedData(json);
          };
        }}
      />
      <button 
        disabled={!uploadedData}
        onSubmit={e => {
          e.preventDefault();
          if (uploadedData) onSubmit(uploadedData);
        }}
      >
        {uploadedData?.length
          ? `import ${ppNumber(uploadedData.length)} ${buttonLabel}`
          : `import ${buttonLabel} (${fileType})`
        }
      </button>
    </form>
  );
};

const ImportSection = () => {
  const { data: obsData } = usePricesObsData();
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
          buttonLabel="past obs"
          onSubmit={() => {}}
        />
        <FileForm<CfdbData>
          id={`${sectionId}_cfdb-data`} 
          text={
            <>CFDB data is{!!Object.keys(cfdbData).length ? '' : <b> not</b>} currently loaded.</>
          }
          fileType="json"
          buttonLabel="cfdb data"
          onSubmit={data => setCfdbData(data)}
        />
      </div>
    </Container>
  );
};

export default ImportSection;
