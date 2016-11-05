# Wi-Fine Version History

## UNRELEASED
### Added
- When tray icon is double clicked, latency history is deleted and connectivity status is measured from scratch

## v2.2.0 - 2016-10-30
### Removed
- When checking for updates, gh-releases is not longer used and updates are not automatic

### Added
- Implemented DNS-based pinging but not using it for now, due to a bug in Electron/Chromium
- About modal dialog reports which method is being used for pinging (HTTP/DNS)

### Changed
- Reverted updates module to only open releases page when there's a newer version
- Connectivity status is now based on the median of latest samples, will hopefully reduce back-and-forth changes
- HTTP-based pinging (in use) aborts requests on timeout so result timing in consistent and they don't stack
- Updated some dependencies

## v2.1.0 - 2016-10-24
### Added
- Support for optional beep on status changes (online/offline. Low connectivity is silent).
- Added a loading spinner for Squirrel installer, default one is ugly.

## v2.0.0 - 2016-10-24
### Added
- Slow status now supported.
- Switched Electron's connectivity check for HEAD requests to Google.
	- Tried using DNS resolving, but local cache means latency cannot be determined (for slow status).
	- Spawning a native ping has the drawback of an additional process running and that is not cross-platform out of the box.

## v1.1.0 - 2016-10-23
### Added
- GH-Releases support.
- Custom error handler.

## v1.0.0 - 2016-10-22
### Added
- Basic version, relies on Electron native's connectivity detection (to be improved on next version).