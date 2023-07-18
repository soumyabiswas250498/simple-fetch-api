'use strict';

async function getData() {
  const response = await fetch(
    'https://run.mocky.io/v3/511fa794-6bfb-4c9f-9adb-9e18d62d7003'
  );
  const data = response.json();
  return data;
}

let apiData = await getData();
const table = document.getElementById('table-body');

const questions = apiData.problemsetQuestionList.questions;

function tableRow(title, acRate, difficulty) {
  const tRow = document.createElement('tr');
  tRow.innerHTML = `<td>${title}</td><td>${acRate}</td><td>${difficulty}</td>`;
  return tRow;
}

function populateTable(questions) {
  questions.map(question => {
    const tr = tableRow(question.title, question.acRate, question.difficulty);
    table.append(tr);
  });
}

populateTable(questions);
