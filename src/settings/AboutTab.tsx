import { Download, RefreshCw, FileDown, Upload } from "lucide-react";
import { invoke } from "@tauri-apps/api/core";
import { SettingRow } from "./SettingRow";

interface AboutTabProps {
	appVersion: string;
	autoUpdate: boolean;
	toggleAutoUpdate: () => void;
	updateStatus: string;
	updateVersion: string;
	checkForUpdates: () => void;
	installUpdate: () => void;
	exportStatus: string;
	importStatus: string;
	handleExportSettings: () => void;
	handleImportSettings: () => void;
}

export function AboutTab({
	autoUpdate,
	toggleAutoUpdate,
	updateStatus,
	updateVersion,
	checkForUpdates,
	installUpdate,
	exportStatus,
	importStatus,
	handleExportSettings,
	handleImportSettings
}: AboutTabProps) {
	const displayVersion = "dev-build_1.0.0-Montana";

	const getUpdateLabel = () => {
		switch (updateStatus) {
			case "checking":
				return "Checking...";
			case "available":
				return `Update Available (v${updateVersion})`;
			case "uptodate":
				return "Roses is up to date";
			case "downloading":
				return "Downloading Update...";
			case "installing":
				return "Installing...";
			case "error":
				return "No updates found";
			default:
				return "Check for Updates";
		}
	};

	const getUpdateDesc = () =>
		updateStatus === "available"
			? "Click to install and restart"
			: `Currently running ${displayVersion}`;

	const getExportLabel = () => {
		if (exportStatus === "exporting") return "Exporting...";
		if (exportStatus === "success") return "Exported!";
		return "Export Settings";
	};

	const getImportLabel = () => {
		if (importStatus === "importing") return "Importing...";
		if (importStatus === "success") return "Imported!";
		return "Import Settings";
	};

	return (
		<div className="about-tab-container">
			<div className="about-header">
				<img src="/roses.png" className="about-logo" alt="Roses Logo" />
				<h1 className="about-title">Roses</h1>
				<p className="about-version">{displayVersion}</p>
			</div>

			<div className="setting-group-label">Software Updates</div>
			<div className="setting-group">
				<SettingRow icon={Download} label="Auto Update" desc="Update automatically on startup">
					<label className="toggle-switch">
						<input type="checkbox" checked={autoUpdate} onChange={toggleAutoUpdate} />
						<span className="slider"></span>
					</label>
				</SettingRow>

				<SettingRow
					icon={RefreshCw}
					label={getUpdateLabel()}
					desc={getUpdateDesc()}
					action
					divider={false}
					onClick={() => (updateStatus === "available" ? installUpdate() : checkForUpdates())}
				/>
			</div>

			<div className="setting-group-label setting-group-label--spaced">Data</div>
			<div className="setting-group">
				<SettingRow
					icon={FileDown}
					label={getExportLabel()}
					desc="Save settings to a file"
					action
					onClick={handleExportSettings}
				/>
				<SettingRow
					icon={Upload}
					label={getImportLabel()}
					desc="Load settings from a file"
					action
					divider={false}
					onClick={handleImportSettings}
				/>
			</div>

			<div className="about-footer">
				<a
					href="https://saweria.co/itsmickeyyy"
					target="_blank"
					rel="noreferrer"
					onClick={(e) => {
						e.preventDefault();
						invoke("open_app", { appName: "https://saweria.co/itsmickeyyy" }).catch(() => {
							window.open("https://saweria.co/itsmickeyyy", "_blank");
						});
					}}
					style={{
						cursor: "pointer",
						textDecoration: "none",
						color: "inherit",
						display: "inline-block"
					}}
					title="Support Montana on Saweria"
				>
					<p
						style={{
							cursor: "pointer",
							transition: "all 0.2s ease"
						}}
						onMouseEnter={(e) => (e.currentTarget.style.color = "#ff758f")}
						onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
					>
						Made with ❤️ by Montana
					</p>
				</a>
			</div>
		</div>
	);
}
