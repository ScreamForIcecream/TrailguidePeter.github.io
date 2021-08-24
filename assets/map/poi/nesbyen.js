//Add mountain label & icon
var terrainProvidernes = new Cesium.createWorldTerrain();

var nesbyen = [Cesium.Cartographic.fromDegrees(9.1096, 60.5717),];
var promisenesbyen = Cesium.sampleTerrainMostDetailed(terrainProvidernes, nesbyen);
Cesium.when(promisenesbyen, function(updatednesbyen) {

  Cesium.when.all(
    function (imagesnes) {
        viewer.entities.add({
          name: "Nesbyen",
          position: Cesium.Cartesian3.fromRadians(nesbyen[0].longitude, nesbyen[0].latitude, nesbyen[0].height+100),
          label: {
            text: "Nesbyen",
            font: "40px Arial",
            fillColor: Cesium.Color.fromBytes(255,255,255,220),
            outlineColor: Cesium.Color.fromBytes(20,20,20,220),
            outlineWidth: 3,
            //style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            showBackground : false,
            pixelOffset: new Cesium.Cartesian2(0.0, 0),
            pixelOffsetScaleByDistance: new Cesium.NearFarScalar(0, 0.7, 0.5e5, 0.05),
            scaleByDistance: new Cesium.NearFarScalar(0, 1, 0.5e5, 0.1),
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.5e5),
            horizontalOrigin: Cesium.HorizontalOrigin.BOTTOM,
          },
        });
      });
    });
