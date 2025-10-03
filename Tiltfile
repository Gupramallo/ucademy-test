# Local MongoDB Database (stored in ./database/)
local_resource(
  'mongodb',
  serve_cmd='npm run start:mongo',
  labels=['database']
)

# Backend service
local_resource(
  'backend',
  serve_cmd='npm run start:backend',
  deps=['apps/backend/src'],
  ignore=['apps/backend/src/**/*.spec.ts'],
  labels=['backend']
)

local_resource(
  'frontend', 
  serve_cmd='npm run start:frontend',
  deps=['apps/frontend/src'],
  ignore=['apps/frontend/src/**/*.spec.tsx'],
  labels=['frontend']
)


print("🗂️ Starting ucademy-test with Local Database...")
print("📱 Frontend: http://localhost:4200")
print("🔧 Backend API: http://localhost:3000/api")
print("🗄️ MongoDB: localhost:27018 (for Postico/tools)")
print("📂 Database files: ./apps/backend/database/")