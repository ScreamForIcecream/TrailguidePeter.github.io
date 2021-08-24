//Add mountain label & icon
var terrainProvider = new Cesium.createWorldTerrain();

var positions = [Cesium.Cartographic.fromDegrees(9.1352287, 60.5873951),];
var promise = Cesium.sampleTerrainMostDetailed(terrainProvider, positions);
Cesium.when(promise, function(updatedPositions) {

  Cesium.when.all(
  [Cesium.Resource.fetchImage("https://res.cloudinary.com/dztnnl8x9/image/upload/v1607814557/triangular_hmbuda.png"),],
    function (images) {
      var facilityHeight = images[0].height;

        viewer.entities.add({
          name: "Kleverudnatten, 808m",
          position: Cesium.Cartesian3.fromRadians(positions[0].longitude, positions[0].latitude, positions[0].height+60),
          billboard: {
            color: Cesium.Color.fromBytes(255,255,255,220),
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            scaleByDistance: new Cesium.NearFarScalar(0, 0.25, 0.5e5, 0.03),
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.5e5),
            image: images[0],
          },
          label: {
            text: "Kleverudnatten\n808m",
            font: "24px Arial",
            fillColor: Cesium.Color.fromBytes(255,255,255,220),
            //outlineColor: Cesium.Color.fromBytes(255,255,255,220),
            //outlineWidth: 1,
            //style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            showBackground : false,
            pixelOffset: new Cesium.Cartesian2(0.0, -facilityHeight),
            pixelOffsetScaleByDistance: new Cesium.NearFarScalar(0, 1, 0.5e5, 0.05),
            scaleByDistance: new Cesium.NearFarScalar(0, 1, 0.5e5, 0.1),
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.5e5),
            horizontalOrigin: Cesium.HorizontalOrigin.BOTTOM,
            backgroundPadding: new Cesium.Cartesian2(4, 3),
          },
        });
      });
    });
