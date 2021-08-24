// Add trailhead in form of a Billboard
viewer.entities.add({
  name: "SS4",
  position: Cesium.Cartesian3.fromDegrees(9.072052,	60.56941),
  billboard: {
    image: "https://res.cloudinary.com/dztnnl8x9/image/upload/v1607901172/trailhead_red_woxcny.png",
    scaleByDistance: new Cesium.NearFarScalar(0, 0.3, 0.5e5, 0.01),
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.2e5),
    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
  },
});

// Add trail in form of a Polyline
viewer.entities.add({
  polyline: {
    name: "SS4",
    positions: Cesium.Cartesian3.fromDegreesArray([
      9.072052,	60.56941,
      9.072162,	60.569355,
      9.072356,	60.569328,
      9.072437,	60.56934,
      9.072515,	60.569372,
      9.072739,	60.569402,
      9.072919,	60.569398,
      9.073151,	60.569421,
      9.073301,	60.569389,
      9.073567,	60.569379,
      9.073935,	60.569284,
      9.074261,	60.569278,
      9.075205,	60.56949,
      9.075832,	60.569689,
      9.076259,	60.570042,
      9.076376,	60.570102,
      9.076397,	60.570144,
      9.076545,	60.570176,
      9.07668,	60.570172,
      9.076836,	60.570072,
      9.07696,	60.570037,
      9.076867,	60.569918,
      9.077154,	60.569724,
      9.077294,	60.569562,
      9.077365,	60.569542,
      9.077795,	60.569604,
      9.077926,	60.569644,
      9.077981,	60.569678,
      9.078074,	60.569663,
      9.078128,	60.569631,
      9.078365,	60.569449,
      9.078408,	60.569369,
      9.07843,	60.56928,
      9.078535,	60.569238,
      9.078624,	60.569135,
      9.078665,	60.569062,
      9.0786,	60.568981,
      9.078657,	60.568834,
      9.078838,	60.568842,
      9.07896,	60.568814,
      9.079076,	60.568828,
      9.079224,	60.568855,
      9.079342,	60.568907,
      9.07949,	60.568937,
      9.079851,	60.569071,
      9.079958,	60.569051,
      9.080059,	60.569053,
      9.08016,	60.569004,
      9.080102,	60.568904,
      9.080135,	60.568823,
      9.080116,	60.56871,
      9.080019,	60.568497,
      9.080227,	60.568482,
      9.080455,	60.568502,
      9.080646,	60.568418,
      9.080839,	60.568381,
      9.081046,	60.568396,
      9.081213,	60.568464,
      9.081693,	60.56853,
      9.08193,	60.568188,
      9.081921,	60.568098,
      9.081937,	60.567989,
      9.082016,	60.567929,
      9.0823,	60.567853,
      9.082719,	60.567853,
      9.082884,	60.567879,
      9.083051,	60.567966,
      9.08333,	60.568046,
      9.083501,	60.568156,
      9.083688,	60.568186,
      9.083835,	60.568158,
      9.084278,	60.568139,
      9.084281,	60.568099,
      9.084381,	60.568067,
      9.08447,	60.567993,
      9.084762,	60.567936,
      9.08501,	60.56792,
      9.085375,	60.568098,
      9.085573,	60.568141,
      9.085747,	60.56814,
      9.085851,	60.567865,
      9.085838,	60.567773,
      9.085752,	60.567679,
      9.085911,	60.567431,
      9.085946,	60.567326,
      9.086122,	60.567126,
      9.086199,	60.567061,
      9.08636,	60.567015,
      9.086649,	60.566768,
      9.086951,	60.566743,
      9.087088,	60.566691,
      9.087331,	60.566652,
      9.087407,	60.566588,
      9.087541,	60.566556,
      9.088407,	60.566496,
    ]),
    clampToGround: true,
    width: 4,
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.2e5),
    material: new Cesium.PolylineOutlineMaterialProperty({
      color: Cesium.Color.fromBytes(204,31,26,220),
      outlineWidth: 1,
      // outlineColor: Cesium.Color.fromBytes(255,164,161,150),
      outlineColor: Cesium.Color.fromBytes(204,31,26,100),
    }),
  },
});
