<script lang="ts">
	type Props = {
		picKey: string;
	};
	const { picKey }: Props = $props();
</script>
<div class="pic01">
	<div class="pic02">
		<div class="pic03">
			<div class="pic04">
				<div class="pic05">
					<p>{ picKey } の画像</p>
				</div>
			</div>
		</div>
	</div>
	<div class="pic02">
		<div class="pic03">
			<div class="pic04">
				<div class="pic05">
					<img src={ `/images/performance/${picKey}.webp` } alt={ `${picKey} の alt` } />
				</div>
			</div>
		</div>
	</div>
	<div class="pic02">
		<div class="pic03">
			<div class="pic04">
				<div class="pic05">
					<img src={ `/images/performance/${picKey}_sp.webp` } alt={ `${picKey}_sp の alt` } />
				</div>
			</div>
		</div>
	</div>
</div>
