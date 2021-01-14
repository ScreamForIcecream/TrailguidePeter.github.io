// Add trail in form of a Polyline
viewer.entities.add({
  polyline: {
    id: "Bleicher Horn Südwest",
    positions: Cesium.Cartesian3.fromDegreesArray([
      10.140128,	47.470067,
      10.1383,	47.469806,
      10.136926,	47.469124,
      10.135492,	47.468558,
      10.133454,	47.467934,
      10.131605,	47.467274,
      10.130769,	47.466948,
      10.130222,	47.466107,
      10.129319,	47.464721,
      10.128064,	47.463554,
      10.126928,	47.462567,
      10.126059,	47.461153,
    ]),
    clampToGround: true,
    width: 4,
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.2e5),
    material: new Cesium.PolylineOutlineMaterialProperty({
      color: Cesium.Color.fromBytes(42, 65, 212, 220),
      outlineWidth: 1,
      outlineColor: Cesium.Color.fromBytes(42, 65, 212, 220),
    }),
  },
});
