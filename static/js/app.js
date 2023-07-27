// Function to populate the demographic information in the #sample-metadata on the HTML index.
function populateDemographicInfo(selectedCase) {
    // Load data from the JSON file and assign it to casesDemoInfo variable.
    d3.json("samples.json").then((data) => {
      let casesDemoInfo = data.metadata;
      // Filter the casesDemoInfo based on the selectedCase.
      let selectedCaseInfo = casesDemoInfo.filter(caseInfo => caseInfo.id == selectedCase);
      // Access the first case data.
      let demographicData = selectedCaseInfo[0];
      // Clear the previous output.
      d3.select("#sample-metadata").html("");
      // Populate the demographic info with key-value pairs.
      Object.entries(demographicData).forEach(([key, value]) => {
        // Append the info to the #sample-metadata element as an h6 heading.
        d3.select("#sample-metadata").append("h6").text(`${key}: ${value}`);
      });
    });
  }
  
  // Function to create a bar chart for the selected case.
  function createBarChart(selectedCase) {
    // Load data from the JSON file and assign it to barInfo variable.
    d3.json("samples.json").then((data) => {
      let barInfo = data.samples;
      // Filter the barInfo based on the selectedCase.
      let selectedCaseData = barInfo.filter(caseData => caseData.id == selectedCase)[0];
      // Create the bar chart with top 10 OTUs horizontally.
      let barChart = {
        x: selectedCaseData.sample_values.slice(0, 10).reverse(),
        y: selectedCaseData.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
        text: selectedCaseData.otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h"
      };
      // Set the layout for the bar chart.
      let layoutBar = {
        title: "Top 10 Belly Button Bacteria"
      };
      // Call Plotly to render the bar chart.
      Plotly.newPlot("bar", [barChart], layoutBar);
    });
  }
  
  // Function to create a bubble chart for the selected case.
  function createBubbleChart(selectedCase) {
    // Load data from the JSON file and assign it to bubbleInfo variable.
    d3.json("samples.json").then((data) => {
      let bubbleInfo = data.samples;
      // Filter the bubbleInfo based on the selectedCase.
      let selectedCaseData = bubbleInfo.filter(caseData => caseData.id == selectedCase)[0];
      // Create the bubble chart.
      let bubbleChart = {
        x: selectedCaseData.otu_ids,
        y: selectedCaseData.sample_values,
        text: selectedCaseData.otu_labels,
        mode: "markers",
        marker: {
          size: selectedCaseData.sample_values,
          color: selectedCaseData.otu_ids,
          colorscale: "Bluered"
        }
      };
      // Set the layout for the bubble chart.
      let layoutBubble = {
        title: "Bacteria Cultures Per Sample",
        hovermode: "closest",
        xaxis: { title: "Operational Taxonomic Units (OTU) ID" }
      };
      // Call Plotly to render the bubble chart.
      Plotly.newPlot("bubble", [bubbleChart], layoutBubble);
    });
  }
  
  // Function to start the dashboard.
  function startDashboard() {
    // Access the dropdown with id #selDataset on the HTML index.
    var dropdown = d3.select("#selDataset");
    // Load data from the JSON file and get the case IDs.
    d3.json("samples.json").then((data) => {
      let caseIds = data.names;
      // Append the case IDs to the #selDataset dropdown in HTML.
      caseIds.forEach((caseId) => {
        dropdown.append("option")
          .text(caseId)
          .property("value", caseId);
      });
      // Access the first case data.
      let initialCase = caseIds[0];
      // Call the functions to start the dashboard.
      populateDemographicInfo(initialCase);
      createBarChart(initialCase);
      createBubbleChart(initialCase);
    });
  }
  
  // Function to update the dashboard when a different case is selected.
  function optionChanged(selectedCase) {
    populateDemographicInfo(selectedCase);
    createBarChart(selectedCase);
    createBubbleChart(selectedCase);
  }
  
  // Call the startDashboard function to initialize the dashboard.
  startDashboard();  