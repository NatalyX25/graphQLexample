const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLSchema } = graphql;
const datos = require('./data');
const _ = require('lodash');

const ClienteType = new GraphQLObjectType({
    name: 'Cliente',
    fields: () => ({
        numCliente: {type: GraphQLID},
        nombre: {type: GraphQLString},
        apellido: {type: GraphQLString},
        fechaNacimiento: {type: GraphQLString},
        sexo: {type: GraphQLString},
        telefono: {type: GraphQLString},
        direccion: {type: GraphQLString},
        miembro: {type: GraphQLBoolean}
    })
})

const SolicitudType = new GraphQLObjectType({
    name: 'Solicitud',
    fields: () => ({
        numSolicitud: {type: GraphQLID},
        fechaSolicitud: {type: GraphQLString},
        aprobado: {type: GraphQLBoolean},
        cliente: {
            type: ClienteType,
            resolve(parent, args){
                return _.find(datos.clientes, {numCliente: parent.numCliente});
            }
        }
    })
});

const RegistroType = new GraphQLObjectType({
    name: 'Registro',
    fields: () => ({
        numRegistro: {type: GraphQLID},
        fechaInicio: {type: GraphQLString},
        cuota: {type: GraphQLFloat},
        cliente: {
            type: ClienteType,
            resolve(parent, args){
                return _.find(datos.clientes, {numCliente: parent.numCliente});
            }
        }
    })
});

const FacturaType = new GraphQLObjectType({
    name: 'Factura',
    fields: () => ({
        numFactura: {type: GraphQLID},
        valorFactura: {type: GraphQLFloat},
        fechaLimitePago: {type: GraphQLString},
        registro: {
            type: RegistroType,
            resolve(parent, args){
                return _.find(datos.registros, {numRegistro: parent.numRegistro});
            }
        }
    })
});

const PagoType = new GraphQLObjectType({
    name: 'Pago',
    fields: () => ({
        numPago: {type: GraphQLID},
        fechaPago: {type: GraphQLString},
        factura: {
            type: FacturaType,
            resolve(parent, args){
                return _.find(datos.facturas, {numFactura: parent.numFactura});
            }
        }
    })
})

const TarjetaMiembroType = new GraphQLObjectType({
    name: 'TarjetaMiembro',
    fields: () => ({
        numTarjeta: {type: GraphQLID},
        miembro: {
            type: RegistroType,
            resolve(parent, args){
                return _.find(datos.registros, {numRegistro: parent.numMiembro});
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        cliente: {
            type: ClienteType,
            args: {
                numCliente: {type: GraphQLID}
            },
            resolve(parent, args){
                return _.find(datos.clientes,{
                    numCliente: args.numCliente
                });
            }
        },
        solicitud: {
            type: SolicitudType,
            args: {
                numSolicitud: {type: GraphQLID}
            },
            resolve(parent, args){
                return _.find(datos.solicitudes,{
                    numSolicitud: args.numSolicitud
                });
            }
        },
        registro: {
            type: RegistroType,
            args: {numRegistro: {type: GraphQLID}},
            resolve(parent, args){
                return _.find(datos.registros,{numRegistro: args.numRegistro});
            }
        },
        factura: {
            type: FacturaType,
            args: {numFactura: {type: GraphQLID}},
            resolve(parent, args){
                return _.find(datos.facturas,{numFactura: args.numFactura});
            }
        },
        pago: {
            type: PagoType,
            args: {numPago: {type: GraphQLID}},
            resolve(parent, args){
                return _.find(datos.pagos, {numPago: args.numPago});
            }
        },
        tarjetaMiembro: {
            type: TarjetaMiembroType,
            args: {numTarjeta: {type: GraphQLID}},
            resolve(parent, args){
                return _.find(datos.tarjetasMiembros, {numTarjeta: args.numTarjeta});
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});