# Fingora iOS

Native **Swift / SwiftUI** app. Feature-based modules under `Fingora/`.

## Structure

```
Fingora/
  App/              # @main, DI, navigation shell
  Core/             # Networking, auth, storage, audio, pitch detection
  Features/
    Auth/
    Home/
    Catalog/
    Upload/
    PrivateLibrary/
    MyList/
    PracticePlayer/
    Progress/
    Settings/
  Resources/        # Assets, Localizable.strings
  PreviewContent/
```

## Conventions

- Each feature: `Views/`, `ViewModels/`, optional `Models/`
- Domain types shared across features live in `Core/Models/`
- No business logic in Views; ViewModels call use cases / repositories

## Next steps

1. Create Xcode project targeting iOS 17+
2. Add Swift Package dependencies (e.g. auth SDK, audio) as needed
3. Implement `Core/APIClient` against `shared/api/openapi.yaml`
