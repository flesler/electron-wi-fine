# Wi-Fine Version History

## v2.2.0 - 2016-10-30
### Changed
- Reverted update checker to only open releases page (gh-releases isn't working)

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