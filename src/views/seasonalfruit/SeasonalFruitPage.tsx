import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  --color-bg: var(--oc-gray-9);
  --color-fg: var(--oc-yellow-3);
  --color-text: var(--oc-yellow-3);
  --color-line: var(--oc-gray-1);

  background: var(--color-bg);
  color: var(--color-text);
  padding: 0.75rem;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > section {
    flex-shrink: 1;
    border: 2px solid var(--color-fg);
    padding: 0.75rem;
    border-radius: 0.2rem;
    overflow-x: auto;
  }

  & svg {
    background: var(--color-line);
    border-radius: 0.2rem;

    & text {
      font-size: 0.03rem;
      color: var(--color-bg);
    }

    & .fruit-bar {
      & * { 
        transition: opacity 0.1s ease-in-out;
        opacity: 0.3; 
      }

      &.in-season * { opacity: 1; }

      & rect:hover,
      & rect:hover ~ :where(rect, text) {
        opacity: 1;
      }

      & text:last-child {
        pointer-events: none;
      }

      & text:hover ~ :is(rect, text) {
        opacity: 1;
      }
    }
  }
`;

enum Locale {
  socal = 'Southern California',
  ok = 'Oklahoma',
};

// const assumptions = {
//   taxonomy: {
//     class: 'Magnoliopsida',
//   }
// }

const data: Record<string, {
  label: string,
  seasonality: Partial<Record<Locale, [number, number]>>,
  taxonomy: Record<string, string>,
  origins?: string,
}> = {
  apple: {
    label: 'Apples',
    seasonality: {
      [Locale.socal]: [7, 12],
      [Locale.ok]: [7, 10.5]
    },
    taxonomy: {
      order: 'Rosales',
      family: 'Rosaceae'
    },
    origins: 'Native to the wild apple forests of the Tien Shan mountain ranges of Central Asia in Khazakstan and between China and Kyrgyzstan. Domesticated 4-10k years ago likely by peoples who spoke Turkic languages.',
  },
  apricot: {
    label: 'Apricots',
    seasonality: {
      [Locale.socal]: [3, 6]
    },
    taxonomy: {
      order: 'Rosales',
      family: 'Rosaceae'
    }
  },
  asian_pear: {
    label: 'Asian Pears',
    seasonality: {
      [Locale.socal]: [10, 11]
    },
    taxonomy: {
      order: 'Rosales',
      family: 'Rosaceae'
    }
  },
  avocado: {
    label: 'Avocado',
    seasonality: {
      [Locale.socal]: [1, 12]
    },
    taxonomy: {
      order: 'Laurales',
      family: 'Lauraceae'
    }
  },
  blackberry: {
    label: 'Blackberries',
    seasonality: {
      [Locale.socal]: [6, 8]
    },
    taxonomy: {
      order: 'Rosales',
      family: 'Rosaceae'
    }
  },
  blueberry: {
    label: 'Blueberries',
    seasonality: {
      [Locale.ok]: [5, 7]
    },
    taxonomy: {
      order: 'Ericales',
      family: 'Ericaceae'
    }
  },
  canteloupe: {
    label: 'Cantaloupe',
    seasonality: {
      [Locale.socal]: [5, 11],
      [Locale.ok]: [6, 9]
    },
    taxonomy: {
      order: 'Cucurbitales',
      family: 'Cucurbitaceae'
    }
  },
  cherimoya: {
    label: 'Cherimoya',
    seasonality: {
      [Locale.socal]: [11, 6]
    },
    taxonomy: {
      order: 'Magnoliales',
      family: 'Annonaceae'
    }
  },
  cherry: {
    label: 'Cherries',
    seasonality: {
      [Locale.socal]: [4, 7]
    },
    taxonomy: {
      order: 'Rosales',
      family: 'Rosaceae'
    }
  },
  clementine: {
    label: 'Clementines',
    seasonality: {
      [Locale.socal]: [12, 2]
    },
    taxonomy: {
      order: 'Sapindales',
      family: 'Rutaceae'
    }
  },
  date: {
    label: 'Dates',
    seasonality: {
      [Locale.socal]: [9, 12]
    },
    taxonomy: {
      order: 'Arecales',
      family: 'Arecaceae'
    }
  },
  gooseberry: {
    label: 'Gooseberries',
    seasonality: {
      [Locale.socal]: [6, 8],
      [Locale.ok]: [6, 7]
    },
    taxonomy: {
      order: 'Saxifragales',
      family: 'Grossulariaceae'
    }
  },
  kiwi: {
    label: 'Kiwi',
    seasonality: {
      [Locale.socal]: [10, 4]
    },
    taxonomy: {
      order: 'Ericales',
      family: 'Actinidiaceae'
    }
  },
  lychee: {
    label: 'Lychee',
    seasonality: {
      [Locale.socal]: [8.5, 9.5]
    },
    taxonomy: {
      order: 'Sapindales',
      family: 'Sapindaceae'
    },
    origins: 'Native to South East Asia and wild lychee trees still grow in Southern China and the Hainan Island. Domesticated between 3-1k years ago by people speaking Sino-Tibetan languages.',
  },
  pawpaw: {
    label: 'Pawpaw',
    seasonality: {
      [Locale.ok]: [8.5, 9]
    },
    taxonomy: {
      order: 'Magnoliales',
      family: 'Annonaceae'
    }
  },
  pear: {
    label: 'Pears',
    seasonality: {
      [Locale.socal]: [8, 10],
      [Locale.ok]: [8, 10]
    },
    taxonomy: {
      order: 'Rosales',
      family: 'Rosaceae'
    }
  },
  raspberry: {
    label: 'Raspberries',
    seasonality: {
      [Locale.socal]: [4, 10],
      [Locale.ok]: [6, 10]
    },
    taxonomy: {
      order: 'Rosales',
      family: 'Rosaceae'
    }
  },
  watermelon: {
    label: 'Watermelon',
    seasonality: {
      [Locale.socal]: [7, 11],
      [Locale.ok]: [7, 10]
    },
    taxonomy: {
      order: 'Cucurbitales',
      family: 'Cucurbitaceae'
    }
  }
};

const SeasonalFruitPage = () => {
  const [locale, setLocale] = React.useState(Locale.socal);

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const todayX = month + (day / (new Date(today.getFullYear(), month, 0).getDate()));

  const fruits = Object.values(data).filter(f => f.seasonality[locale]);

  return (
    <Page>
      <h1>Seasonal Fruit Chart</h1>
      <section>
        <h2>Chart</h2>
        <div>
          <svg
            viewBox={`0 0 12 ${fruits.length + 2}`}
            width="100%"
          >
            <g>
              <g>
                <line
                  x1={todayX}
                  y1={0}
                  x2={todayX}
                  y2={Object.values(data).length + 2}
                  stroke="var(--color-bg)"
                  strokeWidth="0.05px"
                  strokeDasharray="0.05 0.05"
                />
                {Array.from({ length: 12 }).map((_, i) => (
                  <line 
                    key={i}
                    x1={i + 1}
                    y1={0}
                    x2={i + 1}
                    y2={Object.values(data).length + 2}
                    stroke="var(--color-bg)"
                    strokeWidth="0.025px"
                    opacity={0.1}
                  />
                ))}
              </g>
              {fruits.map(({ label, seasonality }, i) => {
                const [start, end] = seasonality[locale] as [number, number];

                const bars = start > end ? [
                  [start, 12],
                  [1, end]
                ] : [
                  [start, end]
                ];

                const includesToday = bars.some(([start, end]) => (start - 1) <= todayX && todayX <= end);

                return (
                  <g key={label} className={`fruit-bar ${includesToday ? 'in-season' : ''}`}>
                    {Math.abs(end - start) > 10 ? (
                      <text
                        x={6}
                        y={i + 1.5}
                        textAnchor="middle"
                      >{label}</text>
                    ) : (
                      <text
                        x={start - 0.9}
                        y={i + 1.5}
                        textAnchor="start"
                      >{label}</text>
                    )}
                    {bars.map(([start, end]) => (
                      <rect
                        key={`${start}-${end}`}
                        x={start - 1}
                        y={i + 1}
                        width={end - start + 1}
                        height={1 * 0.75}
                        fill="var(--color-fg)"
                        stroke="var(--color-bg)"
                        strokeWidth="0.05px"
                      />
                    ))}
                    {Math.abs(end - start) > 10 ? (
                      <text
                        x={6}
                        y={i + 1.5}
                        textAnchor="middle"
                      >{label}</text>
                    ) : (
                      <text
                        x={start - 0.9}
                        y={i + 1.5}
                        textAnchor="start"
                      >{label}</text>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </section>
      <section>
        <h2>Locale</h2>
        <select value={locale} onChange={e => setLocale(e.target.value as Locale)}>
          {Object.entries(Locale).map(([value, label]) => (
            <option key={value} value={label}>{label}</option>
          ))}
        </select>
      </section>
    </Page>
  )
};

export default React.memo(SeasonalFruitPage);
