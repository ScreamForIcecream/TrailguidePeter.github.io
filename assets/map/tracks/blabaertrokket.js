// Add trailhead in form of a Billboard
viewer.entities.add({
  name: "Blåbærtrokket",
  position: Cesium.Cartesian3.fromDegrees(9.1566236, 60.5786747),
  billboard: {
    image: "https://res.cloudinary.com/dztnnl8x9/image/upload/v1607904371/trailhead_blue_owmcnk.png",
    scaleByDistance: new Cesium.NearFarScalar(0, 0.3, 0.5e5, 0.01),
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.2e5),
    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
  },
});

// Add trail in form of a Polyline
viewer.entities.add({
  polyline: {
    id: "Blåbærtrokket",
    positions: Cesium.Cartesian3.fromDegreesArray([
      9.1566236,	60.5786747,
      9.1568207,	60.5785609,
      9.1569755,	60.5785303,
      9.1571247,	60.5785344,
      9.1573786,	60.5784645,
      9.1574178,	60.5784253,
      9.1574521,	60.5784168,
      9.1574987,	60.5784367,
      9.15744,	60.5785637,
      9.1574555,	60.5785836,
      9.1574349,	60.5786326,
      9.1574451,	60.5786588,
      9.1574808,	60.5786652,
      9.1576466,	60.5786126,
      9.1577202,	60.5786267,
      9.1577147,	60.5786687,
      9.1576421,	60.5788256,
      9.1576513,	60.5788694,
      9.1576876,	60.5788934,
      9.1577769,	60.5789107,
      9.1578761,	60.5788652,
      9.1579082,	60.5788237,
      9.1579073,	60.578781,
      9.1579461,	60.5787724,
      9.1579738,	60.5787922,
      9.1579735,	60.5788791,
      9.1580145,	60.5789764,
      9.1580694,	60.5790095,
      9.1581751,	60.5790316,
      9.1582645,	60.5790216,
      9.1583437,	60.5789747,
      9.1583989,	60.5789148,
      9.1584477,	60.5788975,
      9.1584764,	60.5789544,
      9.1585173,	60.5789917,
      9.1585249,	60.5790176,
      9.1584713,	60.5790926,
      9.1585481,	60.579236,
      9.1585167,	60.5793164,
      9.1584695,	60.5793536,
      9.1583926,	60.5793912,
      9.1582713,	60.579413,
      9.1581852,	60.5794627,
      9.1581742,	60.579514,
      9.1581451,	60.5795416,
      9.1581457,	60.57959,
      9.1581221,	60.5796429,
      9.1580654,	60.5796712,
      9.1580274,	60.5797828,
      9.1579923,	60.5798075,
      9.1579948,	60.579884,
      9.1579397,	60.5799631,
      9.1579238,	60.5800197,
      9.1576873,	60.5801476,
      9.1576438,	60.5801513,
      9.157564,	60.5801935,
      9.1575162,	60.5801821,
      9.1575271,	60.5801457,
      9.1575674,	60.5801114,
      9.1575527,	60.5800318,
      9.1575236,	60.5800194,
      9.1574691,	60.5800258,
      9.1573843,	60.5800576,
      9.1573553,	60.5801005,
      9.1573657,	60.5801554,
      9.1573425,	60.5801758,
      9.1570968,	60.5802161,
      9.1571072,	60.5802891,
      9.1571451,	60.5803009,
      9.1572208,	60.5803603,
      9.1572045,	60.5803804,
      9.1569722,	60.5804061,
      9.1569274,	60.5804439,
      9.1569596,	60.5804795,
      9.1570064,	60.5804803,
      9.1572342,	60.5803931,
      9.1572753,	60.5803901,
      9.1572806,	60.5803688,
      9.1573817,	60.5803319,
      9.1574474,	60.5803601,
      9.1574626,	60.5803764,
      9.1574488,	60.5804013,
      9.1574076,	60.5804102,
      9.1572178,	60.5805292,
      9.1571456,	60.5805357,
      9.1570967,	60.5805588,
      9.1567153,	60.5805589,
      9.1567144,	60.580594,
      9.1567641,	60.5806013,
      9.1570548,	60.5805773,
      9.1572057,	60.5805313,
      9.157256,	60.5805395,
      9.1572559,	60.5805657,
      9.1572115,	60.5806072,
      9.1569608,	60.580691,
      9.1567055,	60.5807364,
      9.1562843,	60.580711,
      9.1562248,	60.5807534,
      9.156348,	60.5808578,
      9.1563471,	60.5809062,
      9.1561979,	60.5809615,
      9.156093,	60.5809802,
      9.1560481,	60.5810057,
      9.1560489,	60.5810535,
      9.1560672,	60.5810708,
      9.1561775,	60.5810752,
      9.1566677,	60.5809928,
      9.1566954,	60.5810149,
      9.1566089,	60.5811123,
      9.1565547,	60.5812302,
      9.1564982,	60.5812835,
      9.1563046,	60.5813781,
      9.1561078,	60.5813759,
      9.1558291,	60.5813188,
      9.1555961,	60.5812213,
      9.1555782,	60.581199,
      9.1555747,	60.5811265,
      9.1555978,	60.5810453,
      9.1556348,	60.5809945,
      9.155629,	60.5809697,
      9.1557865,	60.5808221,
      9.1556986,	60.5807539,
      9.1555337,	60.5807008,
      9.1554114,	60.5806839,
      9.1553704,	60.580626,
      9.1554013,	60.5805884,
      9.1554481,	60.5805835,
      9.1555335,	60.5805343,
      9.1555795,	60.5805355,
      9.1557219,	60.5804881,
      9.1557531,	60.5804382,
      9.1558513,	60.5803771,
      9.1559237,	60.5802984,
      9.1559633,	60.5802852,
      9.155984,	60.5802102,
      9.1561741,	60.5801528,
      9.1562473,	60.580093,
      9.1562494,	60.5800726,
      9.1563149,	60.5800347,
      9.1563467,	60.5799932,
      9.1563874,	60.5799809,
      9.1564947,	60.5799032,
      9.156527,	60.579857,
      9.1565883,	60.5798144,
      9.1569385,	60.5796711,
      9.1570417,	60.5795932,
      9.1570557,	60.5795667,
      9.1570339,	60.5795223,
      9.1570533,	60.5794194,
      9.1570402,	60.5793928,
      9.1570535,	60.5793389,
      9.157041,	60.5792735,
      9.156869,	60.5790528,
      9.1568041,	60.5790225,
      9.1567638,	60.5790373,
      9.1566979,	60.579106,
      9.1566376,	60.5791158,
      9.1566067,	60.5790958,
      9.156596,	60.5790373,
      9.1566238,	60.5789631,
      9.1565926,	60.5788782,
      9.156602,	60.5788529,
      9.1566492,	60.5788175,
      9.1566475,	60.5787892,
      9.1565777,	60.5787796,
      9.1563461,	60.5788444,
    ]),
    clampToGround: true,
    width: 4,
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.2e5),
    material: new Cesium.PolylineOutlineMaterialProperty({
      color: Cesium.Color.fromBytes(39,121,189,220),
      outlineWidth: 1,
      outlineColor: Cesium.Color.fromBytes(39,121,189,220),
    }),
  },
});
