/** @jsxImportSource react */

type Props = {
	picKey: string;
};

export default function Pic(props: Props) {
	return (
		<div className="pic01">
			<div className="pic02">
				<div className="pic03">
					<div className="pic04">
						<div className="pic05">
							<p>{ props.picKey } の画像</p>
						</div>
					</div>
				</div>
			</div>
			<div className="pic02">
				<div className="pic03">
					<div className="pic04">
						<div className="pic05">
							<img src={ `/images/performance/${props.picKey}.webp` } alt={ `${props.picKey} の alt` } />
						</div>
					</div>
				</div>
			</div>
			<div className="pic02">
				<div className="pic03">
					<div className="pic04">
						<div className="pic05">
							<img src={ `/images/performance/${props.picKey}_sp.webp` } alt={ `${props.picKey}_sp の alt` } />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
