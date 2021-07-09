<template>
	<div>
		<div class="main">
			<div class="travel-left">
				<div class="nav-city">
					<div class="Jiangsu">

						<router-link :to="{name: '南京'}">
							<div class="cityDiv" id="provincial-capital">
								<div></div>
								南京
							</div>
						</router-link>
						<router-link :to="{name: '苏州'}">
							<div class="cityDiv">
								<div></div>
								苏州
							</div>
						</router-link>
						<router-link :to="{name: '扬州'}">
							<div class="cityDiv">
								<div></div>
								扬州
							</div>
						</router-link>

					</div>
				</div>
			</div>
			<div class="travel-right">
				<div class="article">
					<!-- ↓  博客输入  ↓ -->

					<p style="text-align: center; font-size: 30px ">内容暂空</p>

					<!-- ↑  博客输入  ↑ -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TravelNanjing"
}
</script>

<style scoped src="../../../assets/css/travel-city-auto.css"></style>
