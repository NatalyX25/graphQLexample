var clientes = [
    {numCliente: '1', nombre: 'Carolina', apellido: 'Riaño', fechaNacimiento: '2000-04-15', sexo:'F', telefono: '3194359812', direccion: 'Cra 3 # 7A - 24', miembro: true},
    {numCliente: '2', nombre: 'Andrés', apellido: 'Vargas', fechaNacimiento: '2000-04-15', sexo:'M', telefono: '3108763422', direccion: 'Cll 63A # 24 - 35', miembro: true},
    {numCliente: '3', nombre: 'Lucio', apellido: 'Vásquez', fechaNacimiento: '2004-03-25', sexo:'M', telefono: '3194854537', direccion: 'Diag. 6 # 5 - 50 Blq 4 Apt. 301', miembro: false},
    {numCliente: '4', nombre: 'Juliana', apellido: 'Sarmiento', fechaNacimiento: '2002-12-02', sexo:'F', telefono: '3213564784', direccion: 'Tv 70 # 67 - 75 Apt. 520', miembro: false},
    {numCliente: '5', nombre: 'Sara', apellido: 'Quintana', fechaNacimiento: '1995-08-12', sexo:'F', telefono: '3015638193', direccion: 'Cra 10 # 25 - 69', miembro: true},
];

var solicitudes = [
    {numSolicitud: '1', fechaSolicitud: '2020-03-20', aprobado: true, numCliente: '1'},
    {numSolicitud: '2', fechaSolicitud: '2020-03-21', aprobado: true, numCliente: '2'},
    {numSolicitud: '3', fechaSolicitud: '2020-03-22', aprobado: false, numCliente: '3'},
    {numSolicitud: '4', fechaSolicitud: '2020-03-23', aprobado: false, numCliente: '4'},
    {numSolicitud: '5', fechaSolicitud: '2020-03-24', aprobado: true, numCliente: '5'},
];

var registros = [
    {numRegistro: '1', fechaInicio: '2020-03-20', cuota: 35265, numCliente: '1'},
    {numRegistro: '2', fechaInicio: '2020-03-21', cuota: 97087, numCliente: '2'},
    {numRegistro: '3', fechaInicio: '2020-03-22', cuota: 72700, numCliente: '5'}
];

var facturas = [
    {numFactura: '1', valorFactura: 35265, fechaLimitePago: '2020-04-20', numRegistro: '1'},
    {numFactura: '2', valorFactura: 97087, fechaLimitePago: '2020-04-21', numRegistro: '2'},
    {numFactura: '3', valorFactura: 72700, fechaLimitePago: '2020-04-22', numRegistro: '3'},    
];

var pagos = [
    {numPago: '1', fechaPago: '2020-03-30', numFactura: '1'},
    {numPago: '2', fechaPago: '2020-04-03', numFactura: '3'}
]

var tarjetasMiembros = [
    {numTarjeta: '111', numMiembro: '1'},
    {numTarjeta: '112', numMiembro: '2'}
]

module.exports = {
    clientes,
    solicitudes,
    registros,
    facturas,
    pagos,
    tarjetasMiembros
};