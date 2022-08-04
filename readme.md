# Viewpoint Finder

## Commands
### Build application

```
npm run build
```

### Node commands
```
node ./build/cli.js './data/mesh.json' 20
```

```
node ./build/cli.js './data/mesh_x_sin_cos_10000.json' 10000
```

```
node ./build/cli.js './data/mesh_x_sin_cos_20000.json' 20000
```


### Serverless commands
```
serverless invoke local -f findViewpoints -d '{\"filename\": \"./data/mesh.json\", \"numberOfViewpoints\": 23}'
```

```
serverless invoke local -f findViewpoints -d '{\"filename\": \"./data/mesh_x_sin_cos_10000.json\", \"numberOfViewpoints\": 23}'
```

```
serverless invoke local -f findViewpoints -d '{\"filename\": \"./data/mesh_x_sin_cos_20000.json\", \"numberOfViewpoints\": 23}'
```
