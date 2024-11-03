// Initialize OpenUI5 app
sap.ui.getCore().attachInit(function () {
  const oTable = new sap.m.Table({
    columns: [
      new sap.m.Column({ header: new sap.m.Label({ text: "ID" }) }),
      new sap.m.Column({ header: new sap.m.Label({ text: "Name" }) }),
      new sap.m.Column({ header: new sap.m.Label({ text: "Department" }) }),
    ],
  });

  const oTemplate = new sap.m.ColumnListItem({
    cells: [
      new sap.m.Text({ text: "{id}" }),
      new sap.m.Text({ text: "{name}" }),
      new sap.m.Text({ text: "{department}" }),
    ],
  });

  oTable.setModel(new sap.ui.model.json.JSONModel());
  oTable.bindItems("/", oTemplate);

  oTable.placeAt("employeeTableContainer");

  // Fetch data from Python backend
  window.pywebview.api
    .get_employee_data()
    .then((data) => {
      const oModel = new sap.ui.model.json.JSONModel(data);
      oTable.setModel(oModel);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
