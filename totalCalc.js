$("select").change(function() {
    $('#iqTotalPurchaseMethod, #iqTotalDeploymentCost,#iqTotalAnnualService,#iqTotalDaysSupport').children().empty()
    let coreDeploymentCost = parseInt($('#iqCoreDeploymentCost p').length > 0 ? $('#iqCoreDeploymentCost p').text():0);
    let iqApproveDeploymentCost = parseInt($('#iqApproveDeploymentCost p').length > 0 ? $('#iqApproveDeploymentCost p').text():0);
    let IQChiliDeploymentCost = parseInt($('#IQChiliDeploymentCost p').length > 0 ? $('#IQChiliDeploymentCost p').text():0);
    let IQEnfocusDeploymentCost = parseInt($('#IQEnfocusDeploymentCost p').length > 0 ? $('#IQEnfocusDeploymentCost p').text():0);
    let IQEskoDeploymentCost = parseInt($('#IQEskoDeploymentCost p').length > 0 ? $('#IQEskoDeploymentCost p').text():0);
    let IQFreeflowDeploymentCost = parseInt($('#IQFreeflowDeploymentCost p').length > 0 ? $('#IQFreeflowDeploymentCost p').text():0);
    let IQBoxDeploymentCost = parseInt($('#IQBoxDeploymentCost p').length > 0 ? $('#IQBoxDeploymentCost p').text():0);
    let IQInfigoDeploymentCost = parseInt($('#IQInfigoDeploymentCost p').length > 0 ? $('#IQInfigoDeploymentCost p').text():0);
    let IQIntegrateDeploymentCost = parseInt($('#IQIntegrateDeploymentCost p').length > 0 ? $('#IQIntegrateDeploymentCost p').text():0);
    let IQLinkDeploymentCost = parseInt($('#IQLinkDeploymentCost p').length > 0 ? $('#IQLinkDeploymentCost p').text():0);
    let IQPunchOutDeploymentCost = parseInt($('#IQPunchOutDeploymentCost p').length > 0 ? $('#IQPunchOutDeploymentCost p').text():0);
    let IQSmartSiteDeploymentCost = parseInt($('#IQSmartSiteDeploymentCost p').length > 0 ? $('#IQSmartSiteDeploymentCost p').text():0);
    let IQXMPIeDeploymentCost = parseInt($('#IQXMPIeDeploymentCost p').length > 0 ? $('#IQXMPIeDeploymentCost p').text():0);

    let deployCost =  coreDeploymentCost + iqApproveDeploymentCost + IQChiliDeploymentCost + IQEnfocusDeploymentCost + IQEskoDeploymentCost
                    + IQFreeflowDeploymentCost + IQBoxDeploymentCost + IQInfigoDeploymentCost + IQIntegrateDeploymentCost + IQLinkDeploymentCost + IQPunchOutDeploymentCost
                    + IQSmartSiteDeploymentCost + IQXMPIeDeploymentCost
    $('#iqTotalPurchaseMethod, #iqTotalDeploymentCost,#iqTotalAnnualService,#iqTotalDaysSupport').children().empty()
    $("<p>" + deployCost + "</p>").appendTo("#iqTotalDeploymentCost");
    console.log(deployCost);


   


    
    // let deploymentCalculation;
    // let calculationclass = 
    // $('td.deployCalc p').each(function() {
    //    let abc = $('td.deployCalc p').text()
        
    // });
});





// $("#iqTotalDeploymentCost").text(
//     parseInt(
//       $("#IQChiliDeploymentCost p").text() !== "undefined"
//         ? $("#IQChiliDeploymentCost p").text()
//         : 0
//     ) +
//       parseInt(
//         $("#IQEnfocusDeploymentCost p").text() !== "undefined"
//           ? $("#IQEnfocusDeploymentCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQEskoDeploymentCost p").text() !== "undefined"
//           ? $("#IQEskoDeploymentCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQFreeflowDeploymentCost p").text() !== "undefined"
//           ? $("#IQFreeflowDeploymentCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQBoxDeploymentCost p").text() !== "undefined"
//           ? $("#IQBoxDeploymentCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQIntegrateDeploymentCost p").text() !== "undefined"
//           ? $("#IQIntegrateDeploymentCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQLinkDeploymentCost p").text() !== "undefined"
//           ? $("#IQLinkDeploymentCost p").text()
//           : 0
//       ) + 
//       parseInt (
//         $("#iqCoreDeploymentCost p").text()!== "undefined"
//           ? $("#iqCoreDeploymentCost p").text()
//           : 0
//       )
//   );

//   $("#iqTotalAnnualService").text(
//     parseInt(
//       $("#IQChiliAnnualService p").text() !== "undefined"
//         ? $("#IQChiliAnnualService p").text()
//         : 0
//     ) +
//       parseInt(
//         $("#IQEnfocusAnnualService p").text() !== "undefined"
//           ? $("#IQEnfocusAnnualService p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQEskoAnnualService p").text() !== "undefined"
//           ? $("#IQEskoAnnualService p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQFreeflowAnnualService p").text() !== "undefined"
//           ? $("#IQFreeflowAnnualService p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQBoxAnnualService p").text() !== "undefined"
//           ? $("#IQBoxAnnualService p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQIntegrateAnnualService p").text() !== "undefined"
//           ? $("#IQIntegrateAnnualService p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQLinkAnnualService p").text() !== "undefined"
//           ? $("#IQLinkAnnualService p").text()
//           : 0
//       )
//   );

//   $("#iqTotalimplemetationCost").text(
//     parseInt(
//       $("#IQChiliimplemetationCost p").text() !== "undefined"
//         ? $("#IQChiliimplemetationCost p").text()
//         : 00
//     ) +
//       parseInt(
//         $("#IQEnfocusimplemetationCost p").text() !== "undefined"
//           ? $("#IQEnfocusimplemetationCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQEskoimplemetationCost p").text() !== "undefined"
//           ? $("#IQEskoimplemetationCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQFreeflowimplemetationCost p").text() !== "undefined"
//           ? $("#IQFreeflowimplemetationCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQBoximplemetationCost p").text() !== "undefined"
//           ? $("#IQBoximplemetationCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQIntegrateimplemetationCost p").text() !== "undefined"
//           ? $("#IQIntegrateimplemetationCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQLinkimplemetationCost p").text() !== "undefined"
//           ? $("#IQLinkimplemetationCost p").text()
//           : 0
//       )
//   );

//   $("#iqTotalDaysSupport").text(
//     parseInt(
//       $("#IQChiliDaysSupport p").text() !== "undefined"
//         ? $("#IQChiliDaysSupport p").text()
//         : 0
//     ) +
//       parseInt(
//         $("#IQEnfocusDaysSupport p").text() !== "undefined"
//           ? $("#IQEnfocusDaysSupport p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQEskoDaysSupport p").text() !== "undefined"
//           ? $("#IQEskoDaysSupport p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQFreeflowDaysSupport p").text() !== "undefined"
//           ? $("#IQFreeflowDaysSupport p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQBoxDaysSupport p").text() !== "undefined"
//           ? $("#IQBoxDaysSupport p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQIntegrateDaysSupport p").text() !== "undefined"
//           ? $("#IQIntegrateDaysSupport p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQLinkDaysSupport p").text() !== "undefined"
//           ? $("#IQLinkDaysSupport p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#installationCoreModuleDaysincluded").text() !== "undefined"
//           ? $("#installationCoreModuleDaysincluded").text()
//           : 0
//       )
//   );

//   $("#iqTotal_WeeklySubs").text(
//     parseInt(
//       $("#IQChili_WeeklySubs p").text() !== "undefined"
//         ? $("#IQChili_WeeklySubs p").text()
//         : 0
//     ) +
//       parseInt(
//         $("#IQEnfocus_WeeklySubs p").text() !== "undefined"
//           ? $("#IQEnfocus_WeeklySubs p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQFreeflow_WeeklySubs p").text() !== "undefined"
//           ? $("#IQFreeflow_WeeklySubs p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQFreeflow_WeeklySubs p").text() !== "undefined"
//           ? $("#IQFreeflow_WeeklySubs p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQBox_WeeklySubs p").text() !== "undefined"
//           ? $("#IQBox_WeeklySubs p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQIntegrate_WeeklySubs p").text() !== "undefined"
//           ? $("#IQIntegrate_WeeklySubs p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQLink_WeeklySubs p").text() !== "undefined"
//           ? $("#IQLink_WeeklySubs p").text()
//           : 0
//       )
//   );

//   $("#iqTotal_WeeklyImplementationCost").text(
//     parseInt(
//       $("#IQChili_WeeklyImplementationCost p").text() !== "undefined"
//         ? $("#IQChili_WeeklyImplementationCost p").text()
//         : 0
//     ) +
//       parseInt(
//         $("#IQEnfocus_WeeklyImplementationCost p").text() !== "undefined"
//           ? $("#IQEnfocus_WeeklyImplementationCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQFreeflow_WeeklyImplementationCost p").text() !== "undefined"
//           ? $("#IQFreeflow_WeeklyImplementationCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQFreeflow_WeeklyImplementationCost p").text() !== "undefined"
//           ? $("#IQFreeflow_WeeklyImplementationCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQBox_WeeklyImplementationCost p").text() !== "undefined"
//           ? $("#IQBox_WeeklyImplementationCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQIntegrate_WeeklyImplementationCost p").text() !== "undefined"
//           ? $("#IQIntegrate_WeeklyImplementationCost p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQLink_WeeklyImplementationCost p").text() !== "undefined"
//           ? $("#IQLink_WeeklyImplementationCost p").text()
//           : 0
//       )
//   );

//   $("#iqTotal_WeeklyDaysSupport").text(
//     parseInt(
//       $("#IQChili_WeeklyDaysSupport p").text() !== "undefined"
//         ? $("#IQChili_WeeklyDaysSupport p").text()
//         : 0
//     ) +
//       parseInt(
//         $("#IQEnfocus_WeeklyDaysSupport p").text() !== "undefined"
//           ? $("#IQEnfocus_WeeklyDaysSupport p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQFreeflow_WeeklyDaysSupport p").text() !== "undefined"
//           ? $("#IQFreeflow_WeeklyDaysSupport p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQFreeflow_WeeklyDaysSupport p").text() !== "undefined"
//           ? $("#IQFreeflow_WeeklyDaysSupport p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQBox_WeeklyDaysSupport p").text() !== "undefined"
//           ? $("#IQBox_WeeklyDaysSupport p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQIntegrate_WeeklyDaysSupport p").text() !== "undefined"
//           ? $("#IQIntegrate_WeeklyDaysSupport p").text()
//           : 0
//       ) +
//       parseInt(
//         $("#IQLink_WeeklyDaysSupport p").text() !== "undefined"
//           ? $("#IQLink_WeeklyDaysSupport p").text()
//           : 0
//       )
//   );