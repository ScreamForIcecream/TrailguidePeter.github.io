// Add Trailguide logo
var terrainProvider = new Cesium.createWorldTerrain();
var positions = [Cesium.Cartographic.fromDegrees(9.1352287, 60.5873951),];
var promise = Cesium.sampleTerrainMostDetailed(terrainProvider, positions);
Cesium.when(promise, function(updatedPositions) {
  
viewer.entities.add({
  position: Cesium.Cartesian3.fromRadians(positions[0].longitude, positions[0].latitude, positions[0].height+40),
  label: {
    text: "Kleverudnatten\n808m",
    font: "24px Arial",
    fillColor: Cesium.Color.fromBytes(255,255,255),
    //outlineColor: Cesium.Color.fromBytes(255,255,255,220),
    //outlineWidth: 1,
    //style: Cesium.LabelStyle.FILL_AND_OUTLINE,
    pixelOffset: new Cesium.Cartesian2(0.0, -facilityHeight),
    pixelOffsetScaleByDistance: new Cesium.NearFarScalar(0, 0.6, 0.5e5, 0.05),
    scaleByDistance: new Cesium.NearFarScalar(0, 1, 0.5e5, 0.1),
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.5e5),
    horizontalOrigin: Cesium.HorizontalOrigin.BOTTOM,
    backgroundPadding: new Cesium.Cartesian2(4, 3),
  },
});
