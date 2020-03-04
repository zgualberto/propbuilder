$(function() {
    $("select").change(function() {
      $(
        "#iqTotalPurchaseMethod, #iqTotalDeploymentCost,#iqTotalAnnualService,#iqTotalDaysSupport"
      )
        .children()
        .empty();
      let coreDeploymentCost = Number(
        $("#iqCoreDeploymentCost p").length > 0
          ? $("#iqCoreDeploymentCost p").text()
          : 0
      );
      let iqApproveDeploymentCost = Number(
        $("#iqApproveDeploymentCost p").length > 0
          ? $("#iqApproveDeploymentCost p").text()
          : 0
      );
      let IQChiliDeploymentCost = Number(
        $("#IQChiliDeploymentCost p").length > 0
          ? $("#IQChiliDeploymentCost p").text()
          : 0
      );
      let IQEnfocusDeploymentCost = Number(
        $("#IQEnfocusDeploymentCost p").length > 0
          ? $("#IQEnfocusDeploymentCost p").text()
          : 0
      );
      let IQEskoDeploymentCost = Number(
        $("#IQEskoDeploymentCost p").length > 0
          ? $("#IQEskoDeploymentCost p").text()
          : 0
      );
      let IQFreeflowDeploymentCost = Number(
        $("#IQFreeflowDeploymentCost p").length > 0
          ? $("#IQFreeflowDeploymentCost p").text()
          : 0
      );
      let IQBoxDeploymentCost = Number(
        $("#IQBoxDeploymentCost p").length > 0
          ? $("#IQBoxDeploymentCost p").text()
          : 0
      );
      let IQInfigoDeploymentCost = Number(
        $("#IQInfigoDeploymentCost p").length > 0
          ? $("#IQInfigoDeploymentCost p").text()
          : 0
      );
      let IQIntegrateDeploymentCost = Number(
        $("#IQIntegrateDeploymentCost p").length > 0
          ? $("#IQIntegrateDeploymentCost p").text()
          : 0
      );
      let IQLinkDeploymentCost = Number(
        $("#IQLinkDeploymentCost p").length > 0
          ? $("#IQLinkDeploymentCost p").text()
          : 0
      );
      let IQPunchOutDeploymentCost = Number(
        $("#IQPunchOutDeploymentCost p").length > 0
          ? $("#IQPunchOutDeploymentCost p").text()
          : 0
      );
      let IQSmartSiteDeploymentCost = Number(
        $("#IQSmartSiteDeploymentCost p").length > 0
          ? $("#IQSmartSiteDeploymentCost p").text()
          : 0
      );
      let IQXMPIeDeploymentCost = Number(
        $("#IQXMPIeDeploymentCost p").length > 0
          ? $("#IQXMPIeDeploymentCost p").text()
          : 0
      );
  
      let deployCost =
        coreDeploymentCost +
        iqApproveDeploymentCost +
        IQChiliDeploymentCost +
        IQEnfocusDeploymentCost +
        IQEskoDeploymentCost +
        IQFreeflowDeploymentCost +
        IQBoxDeploymentCost +
        IQInfigoDeploymentCost +
        IQIntegrateDeploymentCost +
        IQLinkDeploymentCost +
        IQPunchOutDeploymentCost +
        IQSmartSiteDeploymentCost +
        IQXMPIeDeploymentCost;
      $(
        "#iqTotalPurchaseMethod, #iqTotalDeploymentCost,#iqTotalAnnualService,#iqTotalDaysSupport"
      )
        .children()
        .empty();
      $("<p>" + deployCost + "</p>").appendTo("#iqTotalDeploymentCost");
      // console.log(deployCost);
  
      console.log(coreDeploymentCost);
      console.log(iqApproveDeploymentCost);
      console.log(IQChiliDeploymentCost);
      console.log(IQEnfocusDeploymentCost);
      console.log(IQEskoDeploymentCost);
      console.log(IQFreeflowDeploymentCost);
      console.log(IQBoxDeploymentCost);
      console.log(IQInfigoDeploymentCost);
      console.log(IQIntegrateDeploymentCost);
      console.log(IQLinkDeploymentCost);
      console.log(IQPunchOutDeploymentCost);
      console.log(IQSmartSiteDeploymentCost);
      console.log(IQXMPIeDeploymentCost);
  
      // let deploymentCalculation;
      // let calculationclass =
      // $('td.deployCalc p').each(function() {
      //    let abc = $('td.deployCalc p').text()
  
      // });
    });
  });