export function FinderIcon() {
	return (
		<svg
			width="36"
			height="36"
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ display: "block", borderRadius: "22.5%" }}
		>
			<defs>
				<linearGradient id="finderBg" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stopColor="#62c4fd" />
					<stop offset="100%" stopColor="#126fe5" />
				</linearGradient>
				<linearGradient id="finderRightFace" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#419ef9" />
					<stop offset="100%" stopColor="#0a59ca" />
				</linearGradient>
				<linearGradient id="finderRim" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
					<stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
				</linearGradient>
			</defs>

			{/* Main squircle background */}
			<rect width="100" height="100" rx="22.5" fill="url(#finderBg)" />

			{/* Right half darker face section with smooth curve */}
			<path
				d="M50 0 C65 0 100 0 100 0 L100 100 C100 100 65 100 50 100 C52 75 48 48 50 0 Z"
				fill="url(#finderRightFace)"
			/>

			{/* Center dividing nose line */}
			<path
				d="M50 0 L50 48 Q47 55 40 55"
				stroke="#182f4d"
				strokeWidth="5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>

			{/* Smile */}
			<path
				d="M24 64 C37 80 63 80 76 64"
				stroke="#182f4d"
				strokeWidth="5.5"
				strokeLinecap="round"
				fill="none"
			/>

			{/* Left eye */}
			<ellipse cx="33" cy="38" rx="4.5" ry="7.5" fill="#182f4d" />

			{/* Right eye */}
			<ellipse cx="67" cy="38" rx="4.5" ry="7.5" fill="#182f4d" />

			{/* Inner top rim highlight */}
			<rect
				x="1"
				y="1"
				width="98"
				height="98"
				rx="21.5"
				stroke="url(#finderRim)"
				strokeWidth="1.5"
				fill="none"
			/>
		</svg>
	);
}
