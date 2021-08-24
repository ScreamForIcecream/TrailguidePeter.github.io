// Add trailhead in form of a Billboard
viewer.entities.add({
  name: "Trytetrøkket",
  position: Cesium.Cartesian3.fromDegrees(9.155917,	60.578792),
  billboard: {
    image: "https://res.cloudinary.com/dztnnl8x9/image/upload/v1607904371/trailhead_green_xqatee.png",
    scaleByDistance: new Cesium.NearFarScalar(0, 0.3, 0.5e5, 0.01),
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.2e5),
    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
  },
});

// Add trail in form of a Polyline
viewer.entities.add({
  polyline: {
    id: "Trytetrøkket",
    name: "Trytetrøkket",
    positions: Cesium.Cartesian3.fromDegreesArray([
      9.155917,	60.578792,
      9.156132,	60.578825,
      9.156195,	60.578757,
      9.156269,	60.578721,
      9.15654,	60.578663,
      9.156746,	60.578529,
      9.15684,	60.578497,
      9.157043,	60.578387,
      9.157113,	60.578373,
      9.157178,	60.578382,
      9.157174,	60.578341,
      9.157198,	60.578316,
      9.157337,	60.578327,
      9.157491,	60.578312,
      9.157673,	60.578178,
      9.158027,	60.57806,
      9.158072,	60.577998,
      9.158093,	60.577925,
      9.158189,	60.577792,
      9.158285,	60.577595,
      9.158427,	60.577513,
      9.158483,	60.577388,
      9.158576,	60.577274,
      9.158658,	60.577212,
      9.158759,	60.577164,
      9.159123,	60.577023,
      9.159207,	60.57698,
      9.159251,	60.576934,
      9.159244,	60.576884,
      9.159261,	60.576838,
      9.159212,	60.576781,
      9.15916,	60.576494,
      9.159158,	60.576363,
      9.159125,	60.576306,
      9.158962,	60.576153,
      9.158984,	60.575971,
      9.158924,	60.575743,
      9.158931,	60.575658,
      9.158985,	60.575591,
      9.159105,	60.575234,
      9.159328,	60.574886,
      9.159781,	60.574565,
      9.159982,	60.574466,
      9.160083,	60.574357,
      9.160221,	60.574256,
      9.160409,	60.574054,
      9.160442,	60.57399,
      9.160487,	60.573947,
      9.160459,	60.573895,
      9.16035,	60.573886,
      9.160278,	60.573848,
      9.160164,	60.573755,
      9.160125,	60.573699,
      9.160133,	60.573532,
      9.16022,	60.573362,
      9.160276,	60.57316,
      9.16027,	60.573125,
      9.160224,	60.573055,
      9.160205,	60.572972,
      9.16018,	60.572941,
      9.160151,	60.573047,
      9.160175,	60.573169,
      9.160102,	60.573301,
      9.159994,	60.573592,
      9.159937,	60.573637,
      9.159849,	60.573658,
      9.159775,	60.573642,
      9.159767,	60.573605,
      9.159784,	60.573518,
      9.159741,	60.573564,
      9.159769,	60.573785,
      9.159982,	60.573869,
      9.160032,	60.573909,
      9.160073,	60.573971,
      9.16009,	60.574113,
      9.160038,	60.574334,
      9.159976,	60.574398,
      9.1597,	60.574556,
      9.159467,	60.574665,
      9.159383,	60.574726,
      9.158927,	60.575146,
      9.15869,	60.575402,
      9.158246,	60.57577,
      9.158321,	60.575762,
      9.158373,	60.575784,
      9.158351,	60.575878,
      9.158382,	60.575981,
      9.158481,	60.576126,
      9.158511,	60.576338,
      9.158542,	60.576411,
      9.158649,	60.576532,
      9.158708,	60.576627,
      9.158766,	60.576681,
      9.15877,	60.576842,
      9.158723,	60.577023,
      9.158634,	60.577125,
      9.158393,	60.57734,
      9.158291,	60.577581,
      9.158158,	60.57772,
      9.158068,	60.577784,
      9.157865,	60.577898,
      9.15749,	60.577983,
      9.157264,	60.578071,
      9.157022,	60.578197,
      9.156964,	60.578268,
      9.156878,	60.578432,
      9.156813,	60.578502,
      9.15673,	60.578565,
      9.156418,	60.578734,
      9.156366,	60.578786,
      9.156339,	60.57887,
      9.156285,	60.578893,
      9.156229,	60.578894,
      9.156039,	60.578848,
      9.155961,	60.578846,
      9.155866,	60.578888,
    ]),
    clampToGround: true,
    width: 4,
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.6e5),
    material: new Cesium.PolylineOutlineMaterialProperty({
      color: Cesium.Color.fromBytes(31,157,85,220),
      outlineWidth: 1,
      // outlineColor: Cesium.Color.fromBytes(170,255,206,150),
      outlineColor: Cesium.Color.fromBytes(31,157,85,100),
    }),
  },
});
