viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(9.1096, 60.5717, 150),
  label: {
    text: "Kleverudnatten\n808m",
    font: "24px Arial",
    fillColor: Cesium.Color.fromBytes(255,255,255,220),
    //outlineColor: Cesium.Color.fromBytes(255,255,255,220),
    //outlineWidth: 1,
    //style: Cesium.LabelStyle.FILL_AND_OUTLINE,
    showBackground : false,
    pixelOffset: new Cesium.Cartesian2(0,0),
    pixelOffsetScaleByDistance: new Cesium.NearFarScalar(0, 0.7, 0.5e5, 0.05),
    scaleByDistance: new Cesium.NearFarScalar(0, 1, 0.5e5, 0.1),
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.5e5),
    horizontalOrigin: Cesium.HorizontalOrigin.BOTTOM,
  },
});
