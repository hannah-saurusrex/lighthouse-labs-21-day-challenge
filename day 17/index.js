const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 10,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 2,
      plumpness: 8
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 4,
      plumpness: 3
    }
  ];

  const metric = 'redness';

  const judgeVegetables = (vegetables, metric) => {
      best = 0;
      for (i = 0; i < vegetables.length; i++) { // given an array of an unknown length
          if (vegetables[i][metric] > best) { // for a given vegetable, if the metric is greater than "best", or 0 as defined above,
              person = vegetables[i].submitter; // person variable is a given vegetable's submitter. vegetable of i.submitter
              best = vegetables[i][metric]; // our best variable indicates a given vegetable's metric
          }
      }
      return person;
  }