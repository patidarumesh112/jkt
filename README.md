# NestJS Monorepo Assignment
│   │          ## Setup Instructions
│   │          1. Install dependencies: `npm install`
│   │          2. Setup DB: `npx prisma migrate dev`
│   │          3. Run: `npm run start:dev`
│   │          4. Docker: `docker-compose up --build`
│   │          
│   │          ## Seeding Test Data
│   │          - Users: `npx ts-node prisma/seed.ts`
│   │          - Documents: `npx ts-node prisma/seed-documents.ts`
│   │          
│   │          ## Running Tests
│   │          - Unit: `npm run test`
│   │          - E2E: `npm run test:e2e`