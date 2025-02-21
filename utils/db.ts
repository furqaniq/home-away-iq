// lib/prismaDynamic.ts
// import { PrismaClient } from "@prisma/client";

// type TenantConfig = {
//   databaseUrl: string;
// };

// export function createPrismaClient(config: TenantConfig): PrismaClient {
//   return new PrismaClient({
//     datasources: {
//       db: {
//         url: config.databaseUrl,
//       },
//     },
//   });
// }


// import { PrismaClient } from "@prisma/client";

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };

// type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClientSingleton | undefined;
// };

// const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// export default prisma;

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

import { PrismaClient } from "@prisma/client";

// Create a function to instantiate a new PrismaClient 
export const db = new PrismaClient();

const createPrismaClient = () => {
  return new PrismaClient();
};

// Define a type for the PrismaClient singleton
type PrismaClientSingleton = ReturnType<typeof createPrismaClient>;

// Extend the global object to include a prisma property
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

// Use the existing prisma instance if it exists, otherwise create a new one
const prisma = globalForPrisma.prisma ?? createPrismaClient();

// Export the prisma instance for use in your application
export default prisma;

// In development mode, assign the prisma instance to the global object
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

