console.log("Pricing is running");

const smallCore = {
  name: "Core Software - Small for 25 Staff",
  SoftwareCost: 65000,
  purchaseMethod: "Upfront",
  weeklySubs: 280,
  SoftwareAnnual: 7500,
  implementationTime: 4,
  implementationCost: 22500,
  weekly: "weekly"
};

const mediumCore = {
  name: "Core Software - Medium for 50 Staff",
  SoftwareCost: 82500,
  purchaseMethod: "Upfront",
  weeklySubs: 465,
  SoftwareAnnual: 12000,
  implementationTime: 4,
  implementationCost: 22500,
  WeeklyCost: 465,
  weekly: "weekly"
};

const largeCore = {
  name: "Core Software - Large for 75 Staff",
  SoftwareCost: 112500,
  purchaseMethod: "Upfront",
  weeklySubs: 680,
  SoftwareAnnual: 18000,
  implementationTime: 4,
  implementationCost: 22500,
  weekly: "weekly"
};

const extralargeCore = {
  name: "Core Software - Extra Large for 100 Staff",
  SoftwareCost: 137500,
  purchaseMethod: "Upfront",
  weeklySubs: 890,
  SoftwareAnnual: 23000,
  implementationTime: 4,
  implementationCost: 22500,
  weekly: "weekly"
};

const PlusAndConnect = {
  IQapprove: "IQ Approve",
  IQChili: "IQ Chili Publish",
  IQEnfocus: "IQ Enfocus",
  IQEsko: "IQ Esko",
  IQFreeflow: "IQ Freeflow Core",
  Infigo: "IQ Infigo",
  IQIntegrate: "IQ Integrate",
  IQLink: "IQ Link",
  Prinergy: "IQ Prinergy",
  IQPunchOut: "IQ Punch Out",
  IQSmartSite: "IQ Smart Site",
  price: {
    "small": 6320,
    "medium": 7320,
    "large": 8820,
    "extraLarge": 13200,
  },
  annualPrice: {
    small: 750,
    medium: 900,
    large: 1125,
    extraLarge: 1500
  },
  weeklyPrice: {
    small: 40,
    medium: 50,
    large: 60,
    extraLarge: 80
  },
  purchaseMethod: {
    upfront: "upfront",
    weekly: "weekly"
  },
  implementationTime: 1,
  implementationCost: 1320
};

const twoDaysPlusAndConnect = {
  IQEnfocus: "IQ Enfocus",
  IQEsko: "IQ Esko",
  IQBox: "IQ Hp Box",
  price: {
    "small": 7640,
    "medium": 8640,
    "large": 10140,
    "extraLarge": 12640,
  },
  annualPrice: {
    small: 750,
    medium: 900,
    large: 1125,
    extraLarge: 1500
  },
  weeklyPrice: {
    small: 40,
    medium: 50,
    large: 60,
    extraLarge: 80
  },
  purchaseMethod: {
    upfront: "upfront",
    weekly: "weekly"
  },
  implementationTime: 2,
  implementationCost: 2640
};

const satelliteSite = {
  name: "IQ Satellite",
  price: 11750,
  annualPrice: 3550,
  weeklyPrice: 140,
  purchaseMethod: {
    upfront: "upfront",
    weekly: "weekly"
  },
  implementationTime: 4,
  implementationCost: 5280
};

// IQ Sites use this data as well
const factorySite = {
  name: "IQ Sites",
  price: 8875,
  annualPrice: 1775,
  weeklyPrice: 70,
  purchaseMethod: {
    upfront: "upfront",
    weekly: "weekly"
  },
  implementationTime: 2,
  implementationCost: 2640
};

const CarePackage = {
  CarePackageType: {
    "8": {
      name: "8 hours",
      price: 1200
    },
    "20": {
      name: "20 hours",
      price: 2800
    },
    "40": {
      name: "40 hours",
      price: 5200
    }
  }
};

const siteSupport = {
  siteSupportType: {
    offsite: {
      hourlyRate: 165
    },
    onSite: {
      dayCharge: 1720
    }
  }
};

const SelfHosting = {
  HostingType: {
    name: "Self Hosting",
    ImplementationCost: 5280,
    AnnualPrice: 2640
  }
};

$(document).ready(function() {
  console.log("jQuery Running");
  $("#btnHide").click(function() {
    $("#annualRows tr td").each(function() {
      var cell = $.trim($(this).text());
      if (cell.length == 0) {
        $(this)
          .parent()
          .hide();
      }
    });
  });
  $("#btnReset").click(function() {
    $("#annualRows tr").each(function() {
      $(this).show();
    });
  });

  // When we select Core
  $("select").change(function() {
    const selectedModule = $(".core-module__annual")
      .children("option:selected")
      .val();
    const iqApprove = $("#iqApproveSelector")
      .children("option:selected")
      .val();
    const iqChili = $("#iqChiliSelector")
      .children("option:selected")
      .val();
    const iqEnfocus = $("#iqEnfocusSelector")
      .children("option:selected")
      .val();
    const iqEsko = $("#iqEskoSelector")
      .children("option:selected")
      .val();
    const iqFreeflow = $("#iqFreeflowSelector")
      .children("option:selected")
      .val();
    const iqBox = $("#iqBoxSelector")
      .children("option:selected")
      .val();
    const iqInfigo = $("#IQInfigoSelector")
      .children("option:selected")
      .val();
    const iqIntegrate = $("#iqIntegrateSelector")
      .children("option:selected")
      .val();
    const iqLink = $("#iqLinkSelector")
      .children("option:selected")
      .val();
    const iqPunchOut = $("#iqPunchOutSelector")
      .children("option:selected")
      .val();
    const iqSmartSite = $("#iqSmartSiteSelector")
      .children("option:selected")
      .val();
    const iqXMPIe = $("#iqXmpieSelector")
      .children("option:selected")
      .val();

      // Problem Core missing when other option selected.
      // Need to check
    if (selectedModule == "Small") {
      appData(smallCore);
    } else if (selectedModule == "Medium") {
      appData(mediumCore);
    } else if (selectedModule == "Large") {
      appData(largeCore);
    } else if (selectedModule == "Extra Large") {
      appData(extralargeCore);
    }

    // IQ Approve

    if (selectedModule == "Small" && iqApprove == "Yes") {
      iqApproveSmall();
    } else if (selectedModule == "Medium" && iqApprove == "Yes") {
      iqApproveMedium();
    } else if (selectedModule == "Large" && iqApprove == "Yes") {
      iqApproveLarge();
    } else if (selectedModule == "Extra Large" && iqApprove == "Yes") {
      iqApproveExtraLarge();
    } else if (iqApprove == "No") {
      $("#rowIqApprove")
        .children()
        .empty();
      $("#rowIqApprove_Weekly")
        .children()
        .empty();
    }

    // IQ Chili
    if (selectedModule == "Small" && iqChili == "Yes") {
      IQChiliSmall();
    } else if (selectedModule == "Medium" && iqChili == "Yes") {
      IQChiliMedium();
    } else if (selectedModule == "Large" && iqChili == "Yes") {
      IQChiliLarge();
    } else if (selectedModule == "Extra Large" && iqChili == "Yes") {
      IQChiliExtraLarge();
    } else if (iqChili == "No") {
      $("#rowIQChili")
        .children()
        .empty();
      $("#rowIQChili_Weekly")
        .children()
        .empty();
    }

    // IQ Enfocus Switch
    if (selectedModule == "Small" && iqEnfocus == "Yes") {
      IQEnfocusSmall();
    } else if (selectedModule == "Medium" && iqEnfocus == "Yes") {
      IQEnfocusMedium();
    } else if (selectedModule == "Large" && iqEnfocus == "Yes") {
      IQEnfocusLarge();
    } else if (selectedModule == "Extra Large" && iqEnfocus == "Yes") {
      IQEnfocusExtraLarge();
    } else if (iqEnfocus == "No") {
      $("#rowIQEnfocus")
      .children()
      .empty();
    $("#rowIQEnfocus_Weekly")
      .children()
      .empty();
  }


    // IQ Esko

    if (selectedModule == "Small" && iqEsko == "Yes") {
      IQEskoSmall();
    } else if (selectedModule == "Medium" && iqEsko == "Yes") {
      IQEskoMedium();
    } else if (selectedModule == "Large" && iqEsko == "Yes") {
      IQEskoLarge();
    } else if (selectedModule == "Extra Large" && iqEsko == "Yes") {
      IQEskoExtraLarge();
    }
      else if (iqEsko == "No") {
      $('#rowIQEsko')
      .children()
      .empty();
      $('#rowIQEsko_Weekly')
      .children()
      .empty();
    }

    // IQ Freeflow Core
    if (selectedModule == "Small" && iqFreeflow == "Yes") {
      IQFreeflowSmall();
    } else if (selectedModule == "Medium" && iqFreeflow == "Yes") {
      IQFreeflowMedium();
    } else if (selectedModule == "Large" && iqFreeflow == "Yes") {
      IQFreeflowLarge();
    } else if (selectedModule == "Extra Large" && iqFreeflow == "Yes") {
      IQFreeflowExtraLarge();
    } else if (iqFreeflow =='No') {
      $('#rowIQFreeflow')
      .children()
      .empty();
      $('#rowIQFreeflow_Weekly')
      .children()
      .empty()
    }

    if (selectedModule == "Small" && iqBox == "Yes") {
      IQBoxSmall();
    } else if (selectedModule == "Medium" && iqBox == "Yes") {
      IQBoxMedium();
    } else if (selectedModule == "Large" && iqBox == "Yes") {
      IQBoxLarge();
    } else if (selectedModule == "Extra Large" && iqBox == "Yes") {
      IQBoxExtraLarge();
    } else if (iqBox == 'No') {
      $('#rowIQBox')
      .children()
      .empty();
      $('#rowIQBOX_Weekly')
      .children()
      .empty();
    }

    if (selectedModule == "Small" && iqIntegrate == "Yes") {
      IQIntegrateSmall();
    }
    if (selectedModule == "Medium" && iqIntegrate == "Yes") {
      IQIntegrateMedium();
    }
    if (selectedModule == "Large" && iqIntegrate == "Yes") {
      IQIntegrateLarge();
    }
    if (selectedModule == "Extra Large" && iqIntegrate == "Yes") {
      IQIntegrateExtraLarge();
    }
    if (iqIntegrate == 'No') {
      $('#rowIQIntegrate')
      .children()
      .empty();
      $('#rowIQIntegrate_Weekly')
      .children()
      .empty();
    }

    if (selectedModule == "Small" && iqLink == "Yes") {
      IQLinkSelectorSmall();
    }

    if (selectedModule == "Medium" && iqLink == "Yes") {
      IQLinkSelectorMedium();
    }

    if (selectedModule == "Large" && iqLink == "Yes") {
      IQLinkSelectorLarge();
    }

    if (selectedModule == "Extra Large" && iqLink == "Yes") {
      IQLinkSelectorExtraLarge();
    }

    if(iqLink == 'No') {
      $('#rowIQLink') 
        .children()
        .empty();
      $('#rowIQLink_Weekly')
        .children()
        .empty();
    }

    if (selectedModule == "Small" && iqPunchOut == "Yes") {
      IQPunchOutSmall();
    }
    if (selectedModule == "Medium" && iqPunchOut == "Yes") {
      IQPunchOutMedium();
    }
    if (selectedModule == "Large" && iqPunchOut == "Yes") {
      IQPunchOutLarge();
    }
    if (selectedModule == "Extra Large" && iqPunchOut == "Yes") {
      IQPunchOutExtraLarge();
    }
    if (iqPunchOut == 'No') {
      $('#rowIQPunchOut')
        .children()
        .empty();
      $('#rowIQPunchOut_Weekly')
        .children()
        .empty();
    }



    if (selectedModule == "Small" && iqSmartSite == "Yes") {
      IQSmartSiteSmall();
    }
    if (selectedModule == "Medium" && iqSmartSite == "Yes") {
      IQSmartSiteMedium();
    }
    if (selectedModule == "Large" && iqSmartSite == "Yes") {
      IQSmartSiteLarge();
    }
    if (selectedModule == "Extra Large" && iqSmartSite == "Yes") {
      IQSmartSiteExtraLarge();
    }
    


    if (selectedModule =="Small" && iqXMPIe == "Yes") {
      console.log("XMPIe running")
    }

    $("#iqTotalDeploymentCost").text(
      parseInt(
        $("#IQChiliDeploymentCost p").text() !== "undefined"
          ? $("#IQChiliDeploymentCost p").text()
          : 0
      ) +
        parseInt(
          $("#IQEnfocusDeploymentCost p").text() !== "undefined"
            ? $("#IQEnfocusDeploymentCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQEskoDeploymentCost p").text() !== "undefined"
            ? $("#IQEskoDeploymentCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQFreeflowDeploymentCost p").text() !== "undefined"
            ? $("#IQFreeflowDeploymentCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQBoxDeploymentCost p").text() !== "undefined"
            ? $("#IQBoxDeploymentCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQIntegrateDeploymentCost p").text() !== "undefined"
            ? $("#IQIntegrateDeploymentCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQLinkDeploymentCost p").text() !== "undefined"
            ? $("#IQLinkDeploymentCost p").text()
            : 0
        )
    );

    $("#iqTotalAnnualService").text(
      parseInt(
        $("#IQChiliAnnualService p").text() !== "undefined"
          ? $("#IQChiliAnnualService p").text()
          : 0
      ) +
        parseInt(
          $("#IQEnfocusAnnualService p").text() !== "undefined"
            ? $("#IQEnfocusAnnualService p").text()
            : 0
        ) +
        parseInt(
          $("#IQEskoAnnualService p").text() !== "undefined"
            ? $("#IQEskoAnnualService p").text()
            : 0
        ) +
        parseInt(
          $("#IQFreeflowAnnualService p").text() !== "undefined"
            ? $("#IQFreeflowAnnualService p").text()
            : 0
        ) +
        parseInt(
          $("#IQBoxAnnualService p").text() !== "undefined"
            ? $("#IQBoxAnnualService p").text()
            : 0
        ) +
        parseInt(
          $("#IQIntegrateAnnualService p").text() !== "undefined"
            ? $("#IQIntegrateAnnualService p").text()
            : 0
        ) +
        parseInt(
          $("#IQLinkAnnualService p").text() !== "undefined"
            ? $("#IQLinkAnnualService p").text()
            : 0
        )
    );

    $("#iqTotalimplemetationCost").text(
      parseInt(
        $("#IQChiliimplemetationCost p").text() !== "undefined"
          ? $("#IQChiliimplemetationCost p").text()
          : 00
      ) +
        parseInt(
          $("#IQEnfocusimplemetationCost p").text() !== "undefined"
            ? $("#IQEnfocusimplemetationCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQEskoimplemetationCost p").text() !== "undefined"
            ? $("#IQEskoimplemetationCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQFreeflowimplemetationCost p").text() !== "undefined"
            ? $("#IQFreeflowimplemetationCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQBoximplemetationCost p").text() !== "undefined"
            ? $("#IQBoximplemetationCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQIntegrateimplemetationCost p").text() !== "undefined"
            ? $("#IQIntegrateimplemetationCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQLinkimplemetationCost p").text() !== "undefined"
            ? $("#IQLinkimplemetationCost p").text()
            : 0
        )
    );

    $("#iqTotalDaysSupport").text(
      parseInt(
        $("#IQChiliDaysSupport p").text() !== "undefined"
          ? $("#IQChiliDaysSupport p").text()
          : 0
      ) +
        parseInt(
          $("#IQEnfocusDaysSupport p").text() !== "undefined"
            ? $("#IQEnfocusDaysSupport p").text()
            : 0
        ) +
        parseInt(
          $("#IQEskoDaysSupport p").text() !== "undefined"
            ? $("#IQEskoDaysSupport p").text()
            : 0
        ) +
        parseInt(
          $("#IQFreeflowDaysSupport p").text() !== "undefined"
            ? $("#IQFreeflowDaysSupport p").text()
            : 0
        ) +
        parseInt(
          $("#IQBoxDaysSupport p").text() !== "undefined"
            ? $("#IQBoxDaysSupport p").text()
            : 0
        ) +
        parseInt(
          $("#IQIntegrateDaysSupport p").text() !== "undefined"
            ? $("#IQIntegrateDaysSupport p").text()
            : 0
        ) +
        parseInt(
          $("#IQLinkDaysSupport p").text() !== "undefined"
            ? $("#IQLinkDaysSupport p").text()
            : 0
        ) +
        parseInt(
          $("#installationCoreModuleDaysincluded").text() !== "undefined"
            ? $("#installationCoreModuleDaysincluded").text()
            : 0
        )
    );

    $("#iqTotal_WeeklySubs").text(
      parseInt(
        $("#IQChili_WeeklySubs p").text() !== "undefined"
          ? $("#IQChili_WeeklySubs p").text()
          : 0
      ) +
        parseInt(
          $("#IQEnfocus_WeeklySubs p").text() !== "undefined"
            ? $("#IQEnfocus_WeeklySubs p").text()
            : 0
        ) +
        parseInt(
          $("#IQFreeflow_WeeklySubs p").text() !== "undefined"
            ? $("#IQFreeflow_WeeklySubs p").text()
            : 0
        ) +
        parseInt(
          $("#IQFreeflow_WeeklySubs p").text() !== "undefined"
            ? $("#IQFreeflow_WeeklySubs p").text()
            : 0
        ) +
        parseInt(
          $("#IQBox_WeeklySubs p").text() !== "undefined"
            ? $("#IQBox_WeeklySubs p").text()
            : 0
        ) +
        parseInt(
          $("#IQIntegrate_WeeklySubs p").text() !== "undefined"
            ? $("#IQIntegrate_WeeklySubs p").text()
            : 0
        ) +
        parseInt(
          $("#IQLink_WeeklySubs p").text() !== "undefined"
            ? $("#IQLink_WeeklySubs p").text()
            : 0
        )
    );

    $("#iqTotal_WeeklyImplementationCost").text(
      parseInt(
        $("#IQChili_WeeklyImplementationCost p").text() !== "undefined"
          ? $("#IQChili_WeeklyImplementationCost p").text()
          : 0
      ) +
        parseInt(
          $("#IQEnfocus_WeeklyImplementationCost p").text() !== "undefined"
            ? $("#IQEnfocus_WeeklyImplementationCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQFreeflow_WeeklyImplementationCost p").text() !== "undefined"
            ? $("#IQFreeflow_WeeklyImplementationCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQFreeflow_WeeklyImplementationCost p").text() !== "undefined"
            ? $("#IQFreeflow_WeeklyImplementationCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQBox_WeeklyImplementationCost p").text() !== "undefined"
            ? $("#IQBox_WeeklyImplementationCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQIntegrate_WeeklyImplementationCost p").text() !== "undefined"
            ? $("#IQIntegrate_WeeklyImplementationCost p").text()
            : 0
        ) +
        parseInt(
          $("#IQLink_WeeklyImplementationCost p").text() !== "undefined"
            ? $("#IQLink_WeeklyImplementationCost p").text()
            : 0
        )
    );

    $("#iqTotal_WeeklyDaysSupport").text(
      parseInt(
        $("#IQChili_WeeklyDaysSupport p").text() !== "undefined"
          ? $("#IQChili_WeeklyDaysSupport p").text()
          : 0
      ) +
        parseInt(
          $("#IQEnfocus_WeeklyDaysSupport p").text() !== "undefined"
            ? $("#IQEnfocus_WeeklyDaysSupport p").text()
            : 0
        ) +
        parseInt(
          $("#IQFreeflow_WeeklyDaysSupport p").text() !== "undefined"
            ? $("#IQFreeflow_WeeklyDaysSupport p").text()
            : 0
        ) +
        parseInt(
          $("#IQFreeflow_WeeklyDaysSupport p").text() !== "undefined"
            ? $("#IQFreeflow_WeeklyDaysSupport p").text()
            : 0
        ) +
        parseInt(
          $("#IQBox_WeeklyDaysSupport p").text() !== "undefined"
            ? $("#IQBox_WeeklyDaysSupport p").text()
            : 0
        ) +
        parseInt(
          $("#IQIntegrate_WeeklyDaysSupport p").text() !== "undefined"
            ? $("#IQIntegrate_WeeklyDaysSupport p").text()
            : 0
        ) +
        parseInt(
          $("#IQLink_WeeklyDaysSupport p").text() !== "undefined"
            ? $("#IQLink_WeeklyDaysSupport p").text()
            : 0
        )
    );
  });
});

function clearTables() {
  $("#rowIqcore")
    .children()
    .empty();
  $("#rowIqcore_Weekly")
    .children()
    .empty();
}

function appData(data) {
  clearTables();

  $("<p>" + data.name + "</p>").appendTo("#iqCore, #iqCore_Weekly");
  $("<p>" + data.purchaseMethod + "</p>").appendTo("#iqCorePurchaseMethod");
  $("<p>" + data.weekly + "</p>").appendTo("#iqCore_WeeklyPurchaseMethod");
  $("<p>" + data.weeklySubs + "</p>").appendTo("#iqCore_WeeklySubs");
  $("<p>" + data.SoftwareCost + "</p>").appendTo("#iqCoreDeploymentCost");
  $("<p>" + data.SoftwareAnnual + "</p>").appendTo("#iqCoreAnnualService");
  $("<p>" + data.implementationTime + "</p>").appendTo(
    "#iqCoreDaysSupport, #iqCore_WeeklyDaysSupport"
  );
  $("<p>" + data.implementationCost + "</p>").appendTo(
    "#iqCore_WeeklyImplementationCost"
  );
}

function appDataAd(data) {
  clearTables();

  data.forEach(obj => {
    $("<p>" + obj.value + "</p>").appendTo(obj.name);
  });
}

function IQSmartSiteSmall() {
  console.log("smartsite");
  $("#rowIQSmartSite")
    .children()
    .empty();
  $("#rowIQSmartSite_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQSmartSite",
      value: PlusAndConnect.IQSmartSite
    },
    {
      name: "#IQSmartSite_Weekly",
      value: PlusAndConnect.IQSmartSite
    },
    {
      name: "#IQSmartSitePurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQSmartSite_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQSmartSite_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.small
    },
    {
      name: "#IQSmartSiteDeploymentCost",
      value: PlusAndConnect.price.small
    },
    {
      name: "#IQSmartSiteAnnualService",
      value: PlusAndConnect.annualPrice.small
    },
    {
      name: "#IQSmartSiteDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQSmartSiteimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQSmartSite_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQSmartSite_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQSmartSiteMedium() {
  $("#rowIQSmartSite")
    .children()
    .empty();
  $("#rowIQSmartSite_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQSmartSite",
      value: PlusAndConnect.IQSmartSite
    },
    {
      name: "#IQSmartSite_Weekly",
      value: PlusAndConnect.IQSmartSite
    },
    {
      name: "#IQSmartSitePurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQSmartSite_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQSmartSite_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.medium
    },
    {
      name: "#IQSmartSiteDeploymentCost",
      value: PlusAndConnect.price.medium
    },
    {
      name: "#IQSmartSiteAnnualService",
      value: PlusAndConnect.annualPrice.medium
    },
    {
      name: "#IQSmartSiteDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQSmartSiteimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQSmartSite_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQSmartSite_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQSmartSiteLarge() {
  $("#rowIQSmartSite")
    .children()
    .empty();
  $("#rowIQSmartSite_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQSmartSite",
      value: PlusAndConnect.IQSmartSite
    },
    {
      name: "#IQSmartSite_Weekly",
      value: PlusAndConnect.IQSmartSite
    },
    {
      name: "#IQSmartSitePurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQSmartSite_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQSmartSite_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.large
    },
    {
      name: "#IQSmartSiteDeploymentCost",
      value: PlusAndConnect.price.large
    },
    {
      name: "#IQSmartSiteAnnualService",
      value: PlusAndConnect.annualPrice.large
    },
    {
      name: "#IQSmartSiteDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQSmartSiteimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQSmartSite_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQSmartSite_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQSmartSiteExtraLarge() {
  $("#rowIQSmartSite")
    .children()
    .empty();
  $("#rowIQSmartSite_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQSmartSite",
      value: PlusAndConnect.IQSmartSite
    },
    {
      name: "#IQSmartSite_Weekly",
      value: PlusAndConnect.IQSmartSite
    },
    {
      name: "#IQSmartSitePurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQSmartSite_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQSmartSite_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.extraLarge
    },
    {
      name: "#IQSmartSiteDeploymentCost",
      value: PlusAndConnect.price.extraLarge
    },
    {
      name: "#IQSmartSiteAnnualService",
      value: PlusAndConnect.annualPrice.extraLarge
    },
    {
      name: "#IQSmartSiteDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQSmartSiteimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQSmartSite_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQSmartSite_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQPunchOutSmall() {
  console.log("small");
  $("#rowIQPunchOut")
    .children()
    .empty();
  $("#rowIQPunchOut_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQPunchOut",
      value: PlusAndConnect.IQPunchOut
    },
    {
      name: "#IQPunchOut_Weekly",
      value: PlusAndConnect.IQPunchOut
    },
    {
      name: "#IQPunchOutPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQPunchOut_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQPunchOut_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.small
    },
    {
      name: "#IQPunchOutDeploymentCost",
      value: PlusAndConnect.price.small
    },
    {
      name: "#IQPunchOutAnnualService",
      value: PlusAndConnect.annualPrice.small
    },
    {
      name: "#IQPunchOutDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQPunchOutimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQPunchOut_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQPunchOut_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQPunchOutMedium() {
  $("#rowIQPunchOut")
    .children()
    .empty();
  $("#rowIQPunchOut_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQPunchOut",
      value: PlusAndConnect.IQPunchOut
    },
    {
      name: "#IQPunchOut_Weekly",
      value: PlusAndConnect.IQPunchOut
    },
    {
      name: "#IQPunchOutPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQPunchOut_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQPunchOut_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.medium
    },
    {
      name: "#IQPunchOutDeploymentCost",
      value: PlusAndConnect.price.medium
    },
    {
      name: "#IQPunchOutAnnualService",
      value: PlusAndConnect.annualPrice.medium
    },
    {
      name: "#IQPunchOutDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQPunchOutimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQPunchOut_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQPunchOut_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQPunchOutLarge() {
  $("#rowIQPunchOut")
    .children()
    .empty();
  $("#rowIQPunchOut_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQPunchOut",
      value: PlusAndConnect.IQPunchOut
    },
    {
      name: "#IQPunchOut_Weekly",
      value: PlusAndConnect.IQPunchOut
    },
    {
      name: "#IQPunchOutPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQPunchOut_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQPunchOut_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.large
    },
    {
      name: "#IQPunchOutDeploymentCost",
      value: PlusAndConnect.price.large
    },
    {
      name: "#IQPunchOutAnnualService",
      value: PlusAndConnect.annualPrice.large
    },
    {
      name: "#IQPunchOutDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQPunchOutimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQPunchOut_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQPunchOut_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQPunchOutExtraLarge() {
  $("#rowIQPunchOut")
    .children()
    .empty();
  $("#rowIQPunchOut_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQPunchOut",
      value: PlusAndConnect.IQPunchOut
    },
    {
      name: "#IQPunchOut_Weekly",
      value: PlusAndConnect.IQPunchOut
    },
    {
      name: "#IQPunchOutPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQPunchOut_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQPunchOut_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.ExtraLarge
    },
    {
      name: "#IQPunchOutDeploymentCost",
      value: PlusAndConnect.price.ExtraLarge
    },
    {
      name: "#IQPunchOutAnnualService",
      value: PlusAndConnect.annualPrice.ExtraLarge
    },
    {
      name: "#IQPunchOutDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQPunchOutimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQPunchOut_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQPunchOut_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQLinkSelectorSmall() {
  $("#rowIQLink")
    .children()
    .empty();
  $("#rowIQLink_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQLink",
      value: PlusAndConnect.IQLink
    },
    {
      name: "#IQLink_Weekly",
      value: PlusAndConnect.IQLink
    },
    {
      name: "#IQLinkPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQLink_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQLink_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.small
    },
    {
      name: "#IQLinkDeploymentCost",
      value: PlusAndConnect.price.small
    },
    {
      name: "#IQLinkAnnualService",
      value: PlusAndConnect.annualPrice.small
    },
    {
      name: "#IQLinkDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQLinkimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQLink_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQLink_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQLinkSelectorMedium() {
  $("#rowIQLink")
    .children()
    .empty();
  $("#rowIQLink_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQLink",
      value: PlusAndConnect.IQLink
    },
    {
      name: "#IQLink_Weekly",
      value: PlusAndConnect.IQLink
    },
    {
      name: "#IQLinkPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQLink_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQLink_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.medium
    },
    {
      name: "#IQLinkDeploymentCost",
      value: PlusAndConnect.price.medium
    },
    {
      name: "#IQLinkAnnualService",
      value: PlusAndConnect.annualPrice.medium
    },
    {
      name: "#IQLinkDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQLinkimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQLink_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQLink_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQLinkSelectorLarge() {
  $("#rowIQLink")
    .children()
    .empty();
  $("#rowIQLink_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQLink",
      value: PlusAndConnect.IQLink
    },
    {
      name: "#IQLink_Weekly",
      value: PlusAndConnect.IQLink
    },
    {
      name: "#IQLinkPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQLink_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQLink_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.large
    },
    {
      name: "#IQLinkDeploymentCost",
      value: PlusAndConnect.price.large
    },
    {
      name: "#IQLinkAnnualService",
      value: PlusAndConnect.annualPrice.large
    },
    {
      name: "#IQLinkDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQLinkimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQLink_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQLink_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQLinkSelectorExtraLarge() {
  $("#rowIQLink")
    .children()
    .empty();
  $("#rowIQLink_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQLink",
      value: PlusAndConnect.IQLink
    },
    {
      name: "#IQLink_Weekly",
      value: PlusAndConnect.IQLink
    },
    {
      name: "#IQLinkPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQLink_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQLink_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.extraLarge
    },
    {
      name: "#IQLinkDeploymentCost",
      value: PlusAndConnect.price.extraLarge
    },
    {
      name: "#IQLinkAnnualService",
      value: PlusAndConnect.annualPrice.extraLarge
    },
    {
      name: "#IQLinkDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQLinkimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQLink_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQLink_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQIntegrateSmall() {
  $("#rowIQIntegrate")
    .children()
    .empty();
  $("#rowIQIntegrate_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQIntegrate",
      value: PlusAndConnect.IQIntegrate
    },
    {
      name: "#IQIntegrate_Weekly",
      value: PlusAndConnect.IQIntegrate
    },
    {
      name: "#IQIntegratePurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQIntegrate_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQIntegrate_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.small
    },
    {
      name: "#IQIntegrateDeploymentCost",
      value: PlusAndConnect.price.small
    },
    {
      name: "#IQIntegrateAnnualService",
      value: PlusAndConnect.annualPrice.small
    },
    {
      name: "#IQIntegrateDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQIntegrateimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQIntegrate_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQIntegrate_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQIntegrateMedium() {
  $("#rowIQIntegrate")
    .children()
    .empty();
  $("#rowIQIntegrate_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQIntegrate",
      value: PlusAndConnect.IQIntegrate
    },
    {
      name: "#IQIntegrate_Weekly",
      value: PlusAndConnect.IQIntegrate
    },
    {
      name: "#IQIntegratePurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQIntegrate_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQIntegrate_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.medium
    },
    {
      name: "#IQIntegrateDeploymentCost",
      value: PlusAndConnect.price.medium
    },
    {
      name: "#IQIntegrateAnnualService",
      value: PlusAndConnect.annualPrice.medium
    },
    {
      name: "#IQIntegrateDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQIntegrateimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQIntegrate_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQIntegrate_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQIntegrateLarge() {
  $("#rowIQIntegrate")
    .children()
    .empty();
  $("#rowIQIntegrate_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQIntegrate",
      value: PlusAndConnect.IQIntegrate
    },
    {
      name: "#IQIntegrate_Weekly",
      value: PlusAndConnect.IQIntegrate
    },
    {
      name: "#IQIntegratePurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQIntegrate_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQIntegrate_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.large
    },
    {
      name: "#IQIntegrateDeploymentCost",
      value: PlusAndConnect.price.large
    },
    {
      name: "#IQIntegrateAnnualService",
      value: PlusAndConnect.annualPrice.large
    },
    {
      name: "#IQIntegrateDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQIntegrateimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQIntegrate_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQIntegrate_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQIntegrateExtraLarge() {
  $("#rowIQIntegrate")
    .children()
    .empty();
  $("#rowIQIntegrate_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQIntegrate",
      value: PlusAndConnect.IQIntegrate
    },
    {
      name: "#IQIntegrate_Weekly",
      value: PlusAndConnect.IQIntegrate
    },
    {
      name: "#IQIntegratePurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQIntegrate_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQIntegrate_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.extraLarge
    },
    {
      name: "#IQIntegrateDeploymentCost",
      value: PlusAndConnect.price.extraLarge
    },
    {
      name: "#IQIntegrateAnnualService",
      value: PlusAndConnect.annualPrice.extraLarge
    },
    {
      name: "#IQIntegrateDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQIntegrateimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQIntegrate_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQIntegrate_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQBoxSmall() {
  $("#rowIQBox")
    .children()
    .empty();
  $("#rowIQBox_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQBox",
      value: twoDaysPlusAndConnect.IQBox
    },
    {
      name: "#IQBox_Weekly",
      value: twoDaysPlusAndConnect.IQBox
    },
    {
      name: "#IQBoxPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQBox_WeeklyPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQBox_WeeklySubs",
      value: twoDaysPlusAndConnect.weeklyPrice.small
    },
    {
      name: "#IQBoxDeploymentCost",
      value: twoDaysPlusAndConnect.price.small
    },
    {
      name: "#IQBoxAnnualService",
      value: twoDaysPlusAndConnect.annualPrice.small
    },
    {
      name: "#IQBoxDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQBoximplemetationCost",
      value: twoDaysPlusAndConnect.implementationCost
    },
    {
      name: "#IQBox_WeeklyDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQBox_WeeklyImplementationCost",
      value: twoDaysPlusAndConnect.implementationCost
    }
  ]);
}

function IQBoxMedium() {
  $("#rowIQBox")
    .children()
    .empty();
  $("#rowIQBox_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQBox",
      value: twoDaysPlusAndConnect.IQBox
    },
    {
      name: "#IQBox_Weekly",
      value: twoDaysPlusAndConnect.IQBox
    },
    {
      name: "#IQBoxPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQBox_WeeklyPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQBox_WeeklySubs",
      value: twoDaysPlusAndConnect.weeklyPrice.medium
    },
    {
      name: "#IQBoxDeploymentCost",
      value: twoDaysPlusAndConnect.price.medium
    },
    {
      name: "#IQBoxAnnualService",
      value: twoDaysPlusAndConnect.annualPrice.medium
    },
    {
      name: "#IQBoxDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQBoximplemetationCost",
      value: twoDaysPlusAndConnect.implementationCost
    },
    {
      name: "#IQBox_WeeklyDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQBox_WeeklyImplementationCost",
      value: twoDaysPlusAndConnect.implementationCost
    }
  ]);
}

function IQBoxLarge() {
  $("#rowIQBox")
    .children()
    .empty();
  $("#rowIQBox_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQBox",
      value: twoDaysPlusAndConnect.IQBox
    },
    {
      name: "#IQBox_Weekly",
      value: twoDaysPlusAndConnect.IQBox
    },
    {
      name: "#IQBoxPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQBox_WeeklyPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQBox_WeeklySubs",
      value: twoDaysPlusAndConnect.weeklyPrice.large
    },
    {
      name: "#IQBoxDeploymentCost",
      value: twoDaysPlusAndConnect.price.large
    },
    {
      name: "#IQBoxAnnualService",
      value: twoDaysPlusAndConnect.annualPrice.large
    },
    {
      name: "#IQBoxDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQBoximplemetationCost",
      value: twoDaysPlusAndConnect.implementationCost
    },
    {
      name: "#IQBox_WeeklyDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQBox_WeeklyImplementationCost",
      value: twoDaysPlusAndConnect.implementationCost
    }
  ]);
}

function IQBoxExtraLarge() {
  $("#rowIQBox")
    .children()
    .empty();
  $("#rowIQBox_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQBox",
      value: twoDaysPlusAndConnect.IQBox
    },
    {
      name: "#IQBox_Weekly",
      value: twoDaysPlusAndConnect.IQBox
    },
    {
      name: "#IQBoxPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQBox_WeeklyPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQBox_WeeklySubs",
      value: twoDaysPlusAndConnect.weeklyPrice.extraLarge
    },
    {
      name: "#IQBoxDeploymentCost",
      value: twoDaysPlusAndConnect.price.extraLarge
    },
    {
      name: "#IQBoxAnnualService",
      value: twoDaysPlusAndConnect.annualPrice.extraLarge
    },
    {
      name: "#IQBoxDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQBoximplemetationCost",
      value: twoDaysPlusAndConnect.implementationCost
    },
    {
      name: "#IQBox_WeeklyDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQBox_WeeklyImplementationCost",
      value: twoDaysPlusAndConnect.implementationCost
    }
  ]);
}

function IQFreeflowSmall() {
  $("#rowIQFreeflow")
    .children()
    .empty();
  $("#rowIQFreeflow_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQFreeflow",
      value: PlusAndConnect.IQFreeflow
    },
    {
      name: "#IQFreeflow_Weekly",
      value: PlusAndConnect.IQFreeflow
    },
    {
      name: "#IQFreeflowPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQFreeflow_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQFreeflow_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.small
    },
    {
      name: "#IQFreeflowDeploymentCost",
      value: PlusAndConnect.price.small
    },
    {
      name: "#IQFreeflowAnnualService",
      value: PlusAndConnect.annualPrice.small
    },
    {
      name: "#IQFreeflowDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQFreeflowimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQFreeflow_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQFreeflow_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQFreeflowMedium() {
  $("#rowIQFreeflow")
    .children()
    .empty();
  $("#rowIQFreeflow_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQFreeflow",
      value: PlusAndConnect.IQFreeflow
    },
    {
      name: "#IQFreeflow_Weekly",
      value: PlusAndConnect.IQFreeflow
    },
    {
      name: "#IQFreeflowPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQFreeflow_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQFreeflow_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.medium
    },
    {
      name: "#IQFreeflowDeploymentCost",
      value: PlusAndConnect.price.medium
    },
    {
      name: "#IQFreeflowAnnualService",
      value: PlusAndConnect.annualPrice.medium
    },
    {
      name: "#IQFreeflowDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQFreeflowimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQFreeflow_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQFreeflow_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQFreeflowLarge() {
  $("#rowIQFreeflow")
    .children()
    .empty();
  $("#rowIQFreeflow_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQFreeflow",
      value: PlusAndConnect.IQFreeflow
    },
    {
      name: "#IQFreeflow_Weekly",
      value: PlusAndConnect.IQFreeflow
    },
    {
      name: "#IQFreeflowPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQFreeflow_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQFreeflow_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.large
    },
    {
      name: "#IQFreeflowDeploymentCost",
      value: PlusAndConnect.price.large
    },
    {
      name: "#IQFreeflowAnnualService",
      value: PlusAndConnect.annualPrice.large
    },
    {
      name: "#IQFreeflowDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQFreeflowimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQFreeflow_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQFreeflow_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQFreeflowExtraLarge() {
  $("#rowIQFreeflow")
    .children()
    .empty();
  $("#rowIQFreeflow_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQFreeflow",
      value: PlusAndConnect.IQFreeflow
    },
    {
      name: "#IQFreeflow_Weekly",
      value: PlusAndConnect.IQFreeflow
    },
    {
      name: "#IQFreeflowPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQFreeflow_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQFreeflow_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.extraLarge
    },
    {
      name: "#IQFreeflowDeploymentCost",
      value: PlusAndConnect.price.extraLarge
    },
    {
      name: "#IQFreeflowAnnualService",
      value: PlusAndConnect.annualPrice.extraLarge
    },
    {
      name: "#IQFreeflowDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQFreeflowimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQFreeflow_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQFreeflow_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQEskoSmall() {
  $("#rowIQEsko")
    .children()
    .empty();
  $("#rowIQEsko_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQEsko",
      value: twoDaysPlusAndConnect.IQEsko
    },
    {
      name: "#IQEsko_Weekly",
      value: twoDaysPlusAndConnect.IQEsko
    },
    {
      name: "#IQEskoPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQEsko_WeeklyPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQEsko_WeeklySubs",
      value: twoDaysPlusAndConnect.weeklyPrice.small
    },
    {
      name: "#IQEskoDeploymentCost",
      value: twoDaysPlusAndConnect.price.small
    },
    {
      name: "#IQEskoAnnualService",
      value: twoDaysPlusAndConnect.annualPrice.small
    },
    {
      name: "#IQEskoDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEskoimplemetationCost",
      value: twoDaysPlusAndConnect.implementationCost
    },
    {
      name: "#IQEsko_WeeklyDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEsko_WeeklyImplementationCost",
      value: twoDaysPlusAndConnect.implementationCost
    }
  ]);
}

function IQEskoMedium() {
  $("#rowIQEsko")
    .children()
    .empty();
  $("#rowIQEsko_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQEsko",
      value: twoDaysPlusAndConnect.IQEsko
    },
    {
      name: "#IQEsko_Weekly",
      value: twoDaysPlusAndConnect.IQEsko
    },
    {
      name: "#IQEskoPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQEsko_WeeklyPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQEsko_WeeklySubs",
      value: twoDaysPlusAndConnect.weeklyPrice.medium
    },
    {
      name: "#IQEskoDeploymentCost",
      value: twoDaysPlusAndConnect.price.medium
    },
    {
      name: "#IQEskoAnnualService",
      value: twoDaysPlusAndConnect.annualPrice.medium
    },
    {
      name: "#IQEskoDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEskoimplemetationCost",
      value: twoDaysPlusAndConnect.implementationCost
    },
    {
      name: "#IQEsko_WeeklyDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEsko_WeeklyImplementationCost",
      value: twoDaysPlusAndConnect.implementationCost
    }
  ]);
}

function IQEskoLarge() {
  $("#rowIQEsko")
    .children()
    .empty();
  $("#rowIQEsko_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQEsko",
      value: twoDaysPlusAndConnect.IQEsko
    },
    {
      name: "#IQEsko_Weekly",
      value: twoDaysPlusAndConnect.IQEsko
    },
    {
      name: "#IQEskoPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQEsko_WeeklyPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQEsko_WeeklySubs",
      value: twoDaysPlusAndConnect.weeklyPrice.large
    },
    {
      name: "#IQEskoDeploymentCost",
      value: twoDaysPlusAndConnect.price.large
    },
    {
      name: "#IQEskoAnnualService",
      value: twoDaysPlusAndConnect.annualPrice.large
    },
    {
      name: "#IQEskoDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEskoimplemetationCost",
      value: twoDaysPlusAndConnect.implementationCost
    },
    {
      name: "#IQEsko_WeeklyDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEsko_WeeklyImplementationCost",
      value: twoDaysPlusAndConnect.implementationCost
    }
  ]);
}

function IQEskoExtraLarge() {
  $("#rowIQEsko")
    .children()
    .empty();
  $("#rowIQEsko_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQEsko",
      value: twoDaysPlusAndConnect.IQEsko
    },
    {
      name: "#IQEsko_Weekly",
      value: twoDaysPlusAndConnect.IQEsko
    },
    {
      name: "#IQEskoPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQEsko_WeeklyPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQEsko_WeeklySubs",
      value: twoDaysPlusAndConnect.weeklyPrice.extraLarge
    },
    {
      name: "#IQEskoDeploymentCost",
      value: twoDaysPlusAndConnect.price.extraLarge
    },
    {
      name: "#IQEskoAnnualService",
      value: twoDaysPlusAndConnect.annualPrice.extraLarge
    },
    {
      name: "#IQEskoDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEskoimplemetationCost",
      value: twoDaysPlusAndConnect.implementationCost
    },
    {
      name: "#IQEsko_WeeklyDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEsko_WeeklyImplementationCost",
      value: twoDaysPlusAndConnect.implementationCost
    }
  ]);
}

function IQEnfocusSmall() {
  $("#rowIQEnfocus")
    .children()
    .empty();
  $("#rowIQEnfocus_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQEnfocus",
      value: twoDaysPlusAndConnect.IQEnfocus
    },
    {
      name: "#IQEnfocus_Weekly",
      value: twoDaysPlusAndConnect.IQEnfocus
    },
    {
      name: "#IQEnfocusPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQEnfocus_WeeklyPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQEnfocus_WeeklySubs",
      value: twoDaysPlusAndConnect.weeklyPrice.small
    },
    {
      name: "#IQEnfocusDeploymentCost",
      value: twoDaysPlusAndConnect.price.small
    },
    {
      name: "#IQEnfocusAnnualService",
      value: twoDaysPlusAndConnect.annualPrice.small
    },
    {
      name: "#IQEnfocusDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEnfocusimplemetationCost",
      value: twoDaysPlusAndConnect.implementationCost
    },
    {
      name: "#IQEnfocus_WeeklyDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEnfocus_WeeklyImplementationCost",
      value: twoDaysPlusAndConnect.implementationCost
    }
  ]);
}

function IQEnfocusMedium() {
  $("#rowIQEnfocus")
    .children()
    .empty();
  $("#rowIQEnfocus_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQEnfocus",
      value: twoDaysPlusAndConnect.IQEnfocus
    },
    {
      name: "#IQEnfocus_Weekly",
      value: twoDaysPlusAndConnect.IQEnfocus
    },
    {
      name: "#IQEnfocusPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQEnfocus_WeeklyPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQEnfocus_WeeklySubs",
      value: twoDaysPlusAndConnect.weeklyPrice.medium
    },
    {
      name: "#IQEnfocusDeploymentCost",
      value: twoDaysPlusAndConnect.price.medium
    },
    {
      name: "#IQEnfocusAnnualService",
      value: twoDaysPlusAndConnect.annualPrice.medium
    },
    {
      name: "#IQEnfocusDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEnfocusimplemetationCost",
      value: twoDaysPlusAndConnect.implementationCost
    },
    {
      name: "#IQEnfocus_WeeklyDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEnfocus_WeeklyImplementationCost",
      value: twoDaysPlusAndConnect.implementationCost
    }
  ]);
}

function IQEnfocusLarge() {
  $("#rowIQEnfocus")
    .children()
    .empty();
  $("#rowIQEnfocus_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQEnfocus",
      value: twoDaysPlusAndConnect.IQEnfocus
    },
    {
      name: "#IQEnfocus_Weekly",
      value: twoDaysPlusAndConnect.IQEnfocus
    },
    {
      name: "#IQEnfocusPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQEnfocus_WeeklyPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQEnfocus_WeeklySubs",
      value: twoDaysPlusAndConnect.weeklyPrice.large
    },
    {
      name: "#IQEnfocusDeploymentCost",
      value: twoDaysPlusAndConnect.price.large
    },
    {
      name: "#IQEnfocusAnnualService",
      value: twoDaysPlusAndConnect.annualPrice.large
    },
    {
      name: "#IQEnfocusDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEnfocusimplemetationCost",
      value: twoDaysPlusAndConnect.implementationCost
    },
    {
      name: "#IQEnfocus_WeeklyDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEnfocus_WeeklyImplementationCost",
      value: twoDaysPlusAndConnect.implementationCost
    }
  ]);
}

function IQEnfocusExtraLarge() {
  $("#rowIQEnfocus")
    .children()
    .empty();
  $("#rowIQEnfocus_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQEnfocus",
      value: twoDaysPlusAndConnect.IQEnfocus
    },
    {
      name: "#IQEnfocus_Weekly",
      value: twoDaysPlusAndConnect.IQEnfocus
    },
    {
      name: "#IQEnfocusPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQEnfocus_WeeklyPurchaseMethod",
      value: twoDaysPlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQEnfocus_WeeklySubs",
      value: twoDaysPlusAndConnect.weeklyPrice.extraLarge
    },
    {
      name: "#IQEnfocusDeploymentCost",
      value: twoDaysPlusAndConnect.price.extraLarge
    },
    {
      name: "#IQEnfocusAnnualService",
      value: twoDaysPlusAndConnect.annualPrice.extraLarge
    },
    {
      name: "#IQEnfocusDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEnfocusimplemetationCost",
      value: twoDaysPlusAndConnect.implementationCost
    },
    {
      name: "#IQEnfocus_WeeklyDaysSupport",
      value: twoDaysPlusAndConnect.implementationTime
    },
    {
      name: "#IQEnfocus_WeeklyImplementationCost",
      value: twoDaysPlusAndConnect.implementationCost
    }
  ]);
}

function IQChiliSmall() {
  $("#rowIQChili")
    .children()
    .empty();
  $("#rowIQChili_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQChili",
      value: PlusAndConnect.IQChili
    },
    {
      name: "#IQChili_Weekly",
      value: PlusAndConnect.IQChili
    },
    {
      name: "#IQChiliPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQChili_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQChili_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.small
    },
    {
      name: "#IQChiliDeploymentCost",
      value: PlusAndConnect.price.small
    },
    {
      name: "#IQChiliAnnualService",
      value: PlusAndConnect.annualPrice.small
    },
    {
      name: "#IQChiliDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQChiliimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQChili_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQChili_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}
function IQChiliMedium() {
  $("#rowIQChili")
    .children()
    .empty();
  $("#rowIQChili_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQChili",
      value: PlusAndConnect.IQChili
    },
    {
      name: "#IQChili_Weekly",
      value: PlusAndConnect.IQChili
    },
    {
      name: "#IQChiliPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQChili_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQChili_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.medium
    },
    {
      name: "#IQChiliDeploymentCost",
      value: PlusAndConnect.price.medium
    },
    {
      name: "#IQChiliAnnualService",
      value: PlusAndConnect.annualPrice.medium
    },
    {
      name: "#IQChiliDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQChiliimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQChili_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQChili_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQChiliLarge() {
  $("#rowIQChili")
    .children()
    .empty();
  $("#rowIQChili_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQChili",
      value: PlusAndConnect.IQChili
    },
    {
      name: "#IQChili_Weekly",
      value: PlusAndConnect.IQChili
    },
    {
      name: "#IQChiliPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQChili_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQChili_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.large
    },
    {
      name: "#IQChiliDeploymentCost",
      value: PlusAndConnect.price.large
    },
    {
      name: "#IQChiliAnnualService",
      value: PlusAndConnect.annualPrice.large
    },
    {
      name: "#IQChiliDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQChiliimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQChili_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQChili_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function IQChiliExtraLarge() {
  $("#rowIQChili")
    .children()
    .empty();
  $("#rowIQChili_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#IQChili",
      value: PlusAndConnect.IQChili
    },
    {
      name: "#IQChili_Weekly",
      value: PlusAndConnect.IQChili
    },
    {
      name: "#IQChiliPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#IQChili_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#IQChili_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.extraLarge
    },
    {
      name: "#IQChiliDeploymentCost",
      value: PlusAndConnect.price.extraLarge
    },
    {
      name: "#IQChiliAnnualService",
      value: PlusAndConnect.annualPrice.extraLarge
    },
    {
      name: "#IQChiliDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQChiliimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#IQChili_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#IQChili_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function iqApproveSmall() {
  $("#rowIqApprove")
    .children()
    .empty();
  $("#rowIqApprove_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#iqApprove",
      value: PlusAndConnect.IQapprove
    },
    {
      name: "#iqApprove_Weekly",
      value: PlusAndConnect.IQapprove
    },
    {
      name: "#iqApprovePurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#iqApprove_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#iqApprove_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.small
    },
    {
      name: "#iqApproveDeploymentCost",
      value: PlusAndConnect.price.small
    },
    {
      name: "#iqApproveAnnualService",
      value: PlusAndConnect.annualPrice.small
    },
    {
      name: "#iqApproveDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#iqApproveimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#iqApprove_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#iqApprove_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function iqApproveMedium() {
  $("#rowIqApprove")
    .children()
    .empty();
  $("#rowIqApprove_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#iqApprove",
      value: PlusAndConnect.IQapprove
    },
    {
      name: "#iqApprove_Weekly",
      value: PlusAndConnect.IQapprove
    },
    {
      name: "#iqApprovePurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#iqApprove_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#iqApprove_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.medium
    },
    {
      name: "#iqApproveDeploymentCost",
      value: PlusAndConnect.price.medium
    },
    {
      name: "#iqApproveAnnualService",
      value: PlusAndConnect.annualPrice.medium
    },
    {
      name: "#iqApproveDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#iqApproveimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#iqApprove_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#iqApprove_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function iqApproveLarge() {
  $("#rowIqApprove")
    .children()
    .empty();
  $("#rowIqApprove_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#iqApprove",
      value: PlusAndConnect.IQapprove
    },
    {
      name: "#iqApprove_Weekly",
      value: PlusAndConnect.IQapprove
    },
    {
      name: "#iqApprovePurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#iqApprove_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#iqApprove_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.large
    },
    {
      name: "#iqApproveDeploymentCost",
      value: PlusAndConnect.price.large
    },
    {
      name: "#iqApproveAnnualService",
      value: PlusAndConnect.annualPrice.large
    },
    {
      name: "#iqApproveDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#iqApproveimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#iqApprove_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#iqApprove_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}

function iqApproveExtraLarge() {
  $("#rowIqApprove")
    .children()
    .empty();
  $("#rowIqApprove_Weekly")
    .children()
    .empty();
  appDataAd([
    {
      name: "#iqApprove",
      value: PlusAndConnect.IQapprove
    },
    {
      name: "#iqApprove_Weekly",
      value: PlusAndConnect.IQapprove
    },
    {
      name: "#iqApprovePurchaseMethod",
      value: PlusAndConnect.purchaseMethod.upfront
    },
    {
      name: "#iqApprove_WeeklyPurchaseMethod",
      value: PlusAndConnect.purchaseMethod.weekly
    },
    {
      name: "#iqApprove_WeeklySubs",
      value: PlusAndConnect.weeklyPrice.extraLarge
    },
    {
      name: "#iqApproveDeploymentCost",
      value: PlusAndConnect.price.extraLarge
    },
    {
      name: "#iqApproveAnnualService",
      value: PlusAndConnect.annualPrice.extraLarge
    },
    {
      name: "#iqApproveDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#iqApproveimplemetationCost",
      value: PlusAndConnect.implementationCost
    },
    {
      name: "#iqApprove_WeeklyDaysSupport",
      value: PlusAndConnect.implementationTime
    },
    {
      name: "#iqApprove_WeeklyImplementationCost",
      value: PlusAndConnect.implementationCost
    }
  ]);
}
