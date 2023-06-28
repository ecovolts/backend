// import { prisma } from '../src/lib/prisma'

// const firstUnitId = '0730ffac-d039-4194-9571-01aa2aa0efbd'
// const secondUnitId = '00880d75-a933-4fef-94ab-e05744435297'
// const thirdUnitId = 'fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00'
// const fourthUnitId = 'ee11f56c-49dc-4dc8-b619-67ac3575276c'
// const fifthUnitId = 'b81db822-a478-4e04-b84b-d463dd4a7423'

// async function run() {
//   await prisma.powerPlant.deleteMany()

//   /**
//    * Create Power Plants
//    */
//   await Promise.all([
//     prisma.powerPlant.create({
//       data: {
//         id: firstUnitId,
//         type: 1,
//         name: 'Casa da Janara',
//         user_id: 'c4a1c40b-0384-4992-a5d0-13a926e711da',
//         ownerName: 'Diogo Soares',
//         thirdPartyPowerPlant_id: '6112ae06-edc3-4408-9156-9f4517ec3bd3',
//         thirdPartyName: 'Fronius',
//         classType: 1,
//         imageUrl:
//           'https://d3csixunm0sjcw.cloudfront.net/wp-content/uploads/2021/05/07161728/placas-fotovoltaicas.jpg',
//         concessionaire_id: '7b5642ca-48ff-43b6-bc0a-648227be6648',
//         concessionaireName: 'Cosern',
//         status: 2,
//         installedPower: 10345.23,
//         totalEnergy: 1023.89,
//         totalGeneratedEnergy: 12100.1,
//         tariffGroup: 7,
//         consumptionClass: 1,
//         tariffModality: 4,
//         supplyType: 3,
//         sceeModality: 1,
//         installed_at: new Date().toISOString(),
//         initGeneration_at: new Date().toISOString(),
//       },
//     }),

//     prisma.powerPlant.create({
//       data: {
//         id: secondUnitId,
//         type: 1,
//         name: 'Rita de Cássia',
//         user_id: 'c4a1c40b-0384-4992-a5d0-13a926e711da',
//         ownerName: 'Rita de Cássia',
//         thirdPartyPowerPlant_id: '6112ae06-edc3-4408-9156-9f4517ec3bd3',
//         thirdPartyName: 'Fronius',
//         classType: 1,
//         imageUrl:
//           'https://d3csixunm0sjcw.cloudfront.net/wp-content/uploads/2021/05/07161728/placas-fotovoltaicas.jpg',
//         concessionaire_id: '7b5642ca-48ff-43b6-bc0a-648227be6648',
//         concessionaireName: 'Cosern',
//         status: 2,
//         installedPower: 45345.23,
//         totalEnergy: 4523.89,
//         totalGeneratedEnergy: 12100.1,
//         tariffGroup: 7,
//         consumptionClass: 1,
//         tariffModality: 4,
//         supplyType: 3,
//         sceeModality: 1,
//         installed_at: new Date().toISOString(),
//         initGeneration_at: new Date().toISOString(),
//       },
//     }),

//     prisma.powerPlant.create({
//       data: {
//         id: thirdUnitId,
//         type: 1,
//         name: 'Casa do Diogo',
//         user_id: 'c4a1c40b-0384-4992-a5d0-13a926e711da',
//         ownerName: 'Diogo Soares',
//         thirdPartyPowerPlant_id: '6112ae06-edc3-4408-9156-9f4517ec3bd3',
//         thirdPartyName: 'Fronius',
//         classType: 1,
//         imageUrl:
//           'https://d3csixunm0sjcw.cloudfront.net/wp-content/uploads/2021/05/07161728/placas-fotovoltaicas.jpg',
//         concessionaire_id: '7b5642ca-48ff-43b6-bc0a-648227be6648',
//         concessionaireName: 'Cosern',
//         status: 2,
//         installedPower: 18445.23,
//         totalEnergy: 523.89,
//         totalGeneratedEnergy: 2300.1,
//         tariffGroup: 7,
//         consumptionClass: 1,
//         tariffModality: 4,
//         supplyType: 3,
//         sceeModality: 1,
//         installed_at: new Date().toISOString(),
//         initGeneration_at: new Date().toISOString(),
//       },
//     }),

//     prisma.powerPlant.create({
//       data: {
//         id: fourthUnitId,
//         type: 1,
//         name: 'Boteco do Juquinha',
//         user_id: 'c4a1c40b-0384-4992-a5d0-13a926e711da',
//         ownerName: 'Juca Furiii',
//         thirdPartyPowerPlant_id: '6112ae06-edc3-4408-9156-9f4517ec3bd3',
//         thirdPartyName: 'Fronius',
//         classType: 1,
//         imageUrl:
//           'https://d3csixunm0sjcw.cloudfront.net/wp-content/uploads/2021/05/07161728/placas-fotovoltaicas.jpg',
//         concessionaire_id: '7b5642ca-48ff-43b6-bc0a-648227be6648',
//         concessionaireName: 'Cosern',
//         status: 2,
//         installedPower: 33345.23,
//         totalEnergy: 1423.89,
//         totalGeneratedEnergy: 12100.1,
//         tariffGroup: 7,
//         consumptionClass: 1,
//         tariffModality: 4,
//         supplyType: 3,
//         sceeModality: 1,
//         installed_at: new Date().toISOString(),
//         initGeneration_at: new Date().toISOString(),
//       },
//     }),

//     prisma.powerPlant.create({
//       data: {
//         id: fifthUnitId,
//         type: 1,
//         name: 'Pousada das Tartarugas',
//         user_id: '8dda13bf-969f-4706-b359-5bdc8cc5dc30',
//         ownerName: 'Zezinho surfista',
//         thirdPartyPowerPlant_id: '6112ae06-edc3-4408-9156-9f4517ec3bd3',
//         thirdPartyName: 'Fronius',
//         classType: 1,
//         imageUrl:
//           'https://d3csixunm0sjcw.cloudfront.net/wp-content/uploads/2021/05/07161728/placas-fotovoltaicas.jpg',
//         concessionaire_id: '7b5642ca-48ff-43b6-bc0a-648227be6648',
//         concessionaireName: 'Cosern',
//         status: 2,
//         installedPower: 25654.23,
//         totalEnergy: 14423.89,
//         totalGeneratedEnergy: 15400.1,
//         tariffGroup: 7,
//         consumptionClass: 1,
//         tariffModality: 4,
//         supplyType: 3,
//         sceeModality: 1,
//         installed_at: new Date().toISOString(),
//         initGeneration_at: new Date().toISOString(),
//       },
//     }),
//   ])
// }

// run()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
