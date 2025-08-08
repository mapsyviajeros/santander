var wms_layers = [];

var format_MunicipioDistritoyAreanomunicipalizada_0 = new ol.format.GeoJSON();
var features_MunicipioDistritoyAreanomunicipalizada_0 = format_MunicipioDistritoyAreanomunicipalizada_0.readFeatures(json_MunicipioDistritoyAreanomunicipalizada_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipioDistritoyAreanomunicipalizada_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipioDistritoyAreanomunicipalizada_0.addFeatures(features_MunicipioDistritoyAreanomunicipalizada_0);
var lyr_MunicipioDistritoyAreanomunicipalizada_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipioDistritoyAreanomunicipalizada_0, 
                style: style_MunicipioDistritoyAreanomunicipalizada_0,
                popuplayertitle: 'Municipio, Distrito y Area no municipalizada',
                interactive: true,
    title: 'Municipio, Distrito y Area no municipalizada<br />\
    <img src="styles/legend/MunicipioDistritoyAreanomunicipalizada_0_0.png" /> Bucaramanga<br />\
    <img src="styles/legend/MunicipioDistritoyAreanomunicipalizada_0_1.png" /> Floridablanca<br />\
    <img src="styles/legend/MunicipioDistritoyAreanomunicipalizada_0_2.png" /> Girón<br />\
    <img src="styles/legend/MunicipioDistritoyAreanomunicipalizada_0_3.png" /> Piedecuesta<br />\
    <img src="styles/legend/MunicipioDistritoyAreanomunicipalizada_0_4.png" /> Tona<br />\
    <img src="styles/legend/MunicipioDistritoyAreanomunicipalizada_0_5.png" /> <br />' });
var format_CRVeredas_2020_1 = new ol.format.GeoJSON();
var features_CRVeredas_2020_1 = format_CRVeredas_2020_1.readFeatures(json_CRVeredas_2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRVeredas_2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRVeredas_2020_1.addFeatures(features_CRVeredas_2020_1);
var lyr_CRVeredas_2020_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRVeredas_2020_1, 
                style: style_CRVeredas_2020_1,
                popuplayertitle: 'CRVeredas_2020',
                interactive: true,
                title: '<img src="styles/legend/CRVeredas_2020_1.png" /> CRVeredas_2020'
            });

lyr_MunicipioDistritoyAreanomunicipalizada_0.setVisible(true);lyr_CRVeredas_2020_1.setVisible(true);
var layersList = [lyr_MunicipioDistritoyAreanomunicipalizada_0,lyr_CRVeredas_2020_1];
lyr_MunicipioDistritoyAreanomunicipalizada_0.set('fieldAliases', {'MpCodigo': 'MpCodigo', 'MpNombre': 'MpNombre', 'MpArea': 'MpArea', 'MpNorma': 'MpNorma', 'MpCategor': 'MpCategor', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'MpAltitud': 'MpAltitud', 'Restriccio': 'Restriccio', 'Depto': 'Depto', });
lyr_CRVeredas_2020_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPTOMPIO': 'DPTOMPIO', 'CODIGO_VER': 'CODIGO_VER', 'NOM_DEP': 'NOM_DEP', 'NOMB_MPIO': 'NOMB_MPIO', 'NOMBRE_VER': 'NOMBRE_VER', 'VIGENCIA': 'VIGENCIA', 'FUENTE': 'FUENTE', 'DESCRIPCIO': 'DESCRIPCIO', 'SEUDONIMOS': 'SEUDONIMOS', 'AREA_HA': 'AREA_HA', 'COD_DPTO': 'COD_DPTO', 'OBSERVACIO': 'OBSERVACIO', 'CONSEJE': 'CONSEJE', 'ORIG_FID': 'ORIG_FID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_MunicipioDistritoyAreanomunicipalizada_0.set('fieldImages', {'MpCodigo': 'TextEdit', 'MpNombre': 'TextEdit', 'MpArea': 'TextEdit', 'MpNorma': 'TextEdit', 'MpCategor': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'MpAltitud': 'Range', 'Restriccio': 'TextEdit', 'Depto': 'TextEdit', });
lyr_CRVeredas_2020_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPTOMPIO': 'TextEdit', 'CODIGO_VER': 'TextEdit', 'NOM_DEP': 'TextEdit', 'NOMB_MPIO': 'TextEdit', 'NOMBRE_VER': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FUENTE': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'SEUDONIMOS': 'TextEdit', 'AREA_HA': 'TextEdit', 'COD_DPTO': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'CONSEJE': 'TextEdit', 'ORIG_FID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_MunicipioDistritoyAreanomunicipalizada_0.set('fieldLabels', {'MpCodigo': 'no label', 'MpNombre': 'no label', 'MpArea': 'no label', 'MpNorma': 'no label', 'MpCategor': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'MpAltitud': 'no label', 'Restriccio': 'no label', 'Depto': 'no label', });
lyr_CRVeredas_2020_1.set('fieldLabels', {'OBJECTID': 'no label', 'DPTOMPIO': 'no label', 'CODIGO_VER': 'no label', 'NOM_DEP': 'no label', 'NOMB_MPIO': 'no label', 'NOMBRE_VER': 'no label', 'VIGENCIA': 'no label', 'FUENTE': 'no label', 'DESCRIPCIO': 'no label', 'SEUDONIMOS': 'no label', 'AREA_HA': 'no label', 'COD_DPTO': 'no label', 'OBSERVACIO': 'no label', 'CONSEJE': 'no label', 'ORIG_FID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_CRVeredas_2020_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});