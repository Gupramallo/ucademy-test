local_resource(
  'mongodb',
  serve_cmd='npm run start:mongo',
  labels=['database']
)

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

