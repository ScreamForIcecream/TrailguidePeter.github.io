// Add trail in form of a Polyline
viewer.entities.add({
  polyline: {
    id: "Schneller Alpe",
    positions: Cesium.Cartesian3.fromDegreesArray([
      10.098195,	47.468195,
      10.099375,	47.470669,
      10.096587,	47.471046,
      10.095331,	47.471706,
      10.09458,	47.472351,
      10.093657,	47.473149,
      10.092015,	47.474469,
      10.092477,	47.473381,
      10.093046,	47.472286,
      10.094279,	47.471183,
      10.095428,	47.469639,
      10.095674,	47.468783,
      10.096071,	47.467884,
      10.095492,	47.467427,
      10.095878,	47.466535,
      10.097037,	47.465069,
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
