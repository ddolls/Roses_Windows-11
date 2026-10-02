import { Monitor, Eye, EyeOff, Circle, Maximize2, Keyboard, Palette } from "lucide-react";
import { SettingRow } from "./SettingRow";

interface DockTabProps {
	dockEnabled: boolean;
	toggleDock: () => void;
	dockTheme: string;
	setDockThemeValue: (theme: string) => void;
	dockMode: string;
	setDockModeValue: (mode: string) => void;
	dockPreviewEnabled: boolean;
	toggleDockPreview: () => void;
	dockIconOnly: boolean;
	toggleDockIconOnly: () => void;
	dockAdaptive: boolean;
	toggleDockAdaptive: () => void;
	dockWinNumberEnabled: boolean;
	toggleDockWinNumber: () => void;
}

export function DockTab({
	dockEnabled,
	toggleDock,
	dockTheme,
	setDockThemeValue,
	dockMode,
	setDockModeValue,
	dockPreviewEnabled,
	toggleDockPreview,
	dockIconOnly,
	toggleDockIconOnly,
	dockAdaptive,
	toggleDockAdaptive,
	dockWinNumberEnabled,
	toggleDockWinNumber
}: DockTabProps) {
	return (
		<>
			<div className="setting-group-label">Dock</div>
			<div className="setting-group">
				<SettingRow icon={Monitor} label="Roses Dock" desc="Replace Windows taskbar">
					<label className="toggle-switch">
						<input type="checkbox" checked={dockEnabled} onChange={toggleDock} />
						<span className="slider"></span>
					</label>
				</SettingRow>

				{dockEnabled && (
					<>
						<SettingRow
							icon={Palette}
							label="Dock Theme"
							desc="Choose visual style for the dock"
						>
							<select
								className="settings-select"
								value={dockTheme}
								onChange={(e) => setDockThemeValue(e.target.value)}
							>
								<option value="default">Default (Attached Concave Taskbar)</option>
								<option value="macos">macOS (Floating Rounded Pill)</option>
								<option value="islands">Multi-Island (Segmented Floating Pods)</option>
								<option value="cyberpunk">Cyberpunk (45° Hex-Chamfered Sci-Fi)</option>
								<option value="shelf">3D Glass Shelf (Perspective Leopard Rack)</option>
								<option value="rail">Laser Rail (Frameless Glowing Track)</option>
								<option value="retro">Retro 90s (Sharp 3D Beveled Box)</option>
								<option value="glass">Liquid Glass (Frosted Vision Capsule)</option>
							</select>
						</SettingRow>

						<SettingRow
							icon={dockMode === "fixed" ? EyeOff : Eye}
							label="Behavior"
							desc="Choose how the dock appears"
						>
							<select
								className="settings-select"
								value={dockMode}
								onChange={(e) => setDockModeValue(e.target.value)}
							>
								<option value="fixed">Fixed</option>
								<option value="smart">Smart</option>
								<option value="peek">Peek</option>
							</select>
						</SettingRow>

						<SettingRow icon={Eye} label="Show App Previews" desc="Show window thumbnails on hover">
							<label className="toggle-switch">
								<input type="checkbox" checked={dockPreviewEnabled} onChange={toggleDockPreview} />
								<span className="slider"></span>
							</label>
						</SettingRow>

						<SettingRow
							icon={Circle}
							label="Icon Only"
							desc="Remove icon background and padding"
							divider={false}
						>
							<label className="toggle-switch">
								<input type="checkbox" checked={dockIconOnly} onChange={toggleDockIconOnly} />
								<span className="slider"></span>
							</label>
						</SettingRow>

						<SettingRow
							icon={Keyboard}
							label="Win+Number Shortcuts"
							desc="Open pinned apps with Win+1 through Win+9"
							divider={dockMode === "fixed" && dockTheme !== "macos"}
						>
							<label className="toggle-switch">
								<input
									type="checkbox"
									checked={dockWinNumberEnabled}
									onChange={toggleDockWinNumber}
								/>
								<span className="slider"></span>
							</label>
						</SettingRow>

						{dockMode === "fixed" && dockTheme !== "macos" && (
							<SettingRow
								icon={Maximize2}
								label="Adaptive Mode"
								desc="Stretch to full width when a window is maximized"
								divider={false}
							>
								<label className="toggle-switch">
									<input type="checkbox" checked={dockAdaptive} onChange={toggleDockAdaptive} />
									<span className="slider"></span>
								</label>
							</SettingRow>
						)}
					</>
				)}
			</div>
		</>
	);
}
