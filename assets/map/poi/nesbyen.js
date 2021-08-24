//Add mountain label & icon
var terrainProvider = new Cesium.createWorldTerrain();

var positions = [Cesium.Cartographic.fromDegrees(9.1096, 60.5717),];
var promise = Cesium.sampleTerrainMostDetailed(terrainProvider, positions);
Cesium.when(promise, function(updatedPositions) {

  Cesium.when.all(
  [Cesium.Resource.fetchImage("https://res.cloudinary.com/dztnnl8x9/image/upload/v1607814557/triangular_hmbuda.png"),],
    function (images) {
        viewer.entities.add({
          name: "Nesbyen",
          position: Cesium.Cartesian3.fromRadians(positions[0].longitude, positions[0].latitude, positions[0].height+40),
          label: {
            text: "Kleverudnatten\n808m",
            font: "24px Arial",
            fillColor: Cesium.Color.fromBytes(255,255,255,220),
            //outlineColor: Cesium.Color.fromBytes(255,255,255,220),
            //outlineWidth: 1,
            //style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            showBackground : false,
            pixelOffset: new Cesium.Cartesian2(0, 0),
            pixelOffsetScaleByDistance: new Cesium.NearFarScalar(0, 0.7, 0.5e5, 0.05),
            scaleByDistance: new Cesium.NearFarScalar(0, 1, 0.5e5, 0.1),
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.5e5),
            horizontalOrigin: Cesium.HorizontalOrigin.BOTTOM,
          },
        });
      });
    });
