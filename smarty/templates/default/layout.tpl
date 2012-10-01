{block name="header"}
{include file="header.tpl"  }
{/block}






<body class="sidebars">
		<!--<div style="background-color: #F66; padding: 5px; text-align: center;"><strong>Development version of Framework 6.x-2.3</strong></div>-->
		<!-- Layout -->
     {include file="menuleft.tpl"}
     {include file="menuright.tpl"}

		<div id="wrapper">

			<div id="ground">

				<div id="inner-ground">
					<div id="bottom-ground">

                {include file="nav_header.tpl"}

						

						<div id="nav">

							<!-- if block in $nav, removes default $primary and $secondary links -->

							<div id="secondary-links"></div>

						</div>
						<!-- /#nav -->
						<!--
						<div class="breadcrumbs clearfix">
						</div>
						-->
						<!--
						<div class="messages error" style='width: 977px;text-align: center;font-weight: bold;'> Bạn chậm chân hơn người khác ?, hãy bấm vào <a rel='nofollow' href='http://sms.nhadatvideo.vn/user'>Xem trước tin chưa đăng</a> để tăng cơ hội tìm được nhà đất như ý </div>
						-->
						<div id="container">

							<div id="center">
                       {block name="tuychon"}
                    
                       
                       
                      {/block}
								<?php

								if (isset($_GET['action'])) {
									$act = $_GET['action'];

									switch($act) {
										case 'register' :
											include 'registerform.php';
											break;
										case 'viewlist' :
											include 'danhsachnha.php';
											break;
										case 'edit' :
											include 'suatin.php';
											break;
										case 'dangtin' :
											include 'dangtinraovat.php';
											break;
										case 'quanly' :
											include 'quanlytindang.php';
											break;
										case 'view' :
											include 'view.php';
											break;
									};

								}

								// include 'houselist.php';
								// include 'registerform.php';
								//  include 'dangtinraovat.php';
								//  include 'suatin.php';
								// include 'quanlytindang.php';
								?>
							</div>
							<!-- /#center -->
							
                      {include file="nav_right.tpl"}
			{include file="footer.tpl"}
						</div>
						<!-- /#container -->
						<span class="clear"></span>
						
						
					</div>
					<!-- /#wrapper -->
				</div>
				<!-- /#bottom-ground -->
			</div>
			<!-- /#inner-ground -->
		</div>
		<!-- /#ground -->
		<!-- /layout -->
		

		<div>
			<!--- Ads by Ambient Digital
			<script type="text/javascript" language="javascript" src="http://delivery.adnetwork.vn/247/adclick/ads_em9uZV9NVEk1TXpBd01UZzNNMTh4TWpnd09URTNNREkwWHpJME1GOHlNREE9Lmh0bWxVNzI4STdWRTEwMTAxMDc4Mk0zOFc=/"></script>
			Ads by Ambient Digital --->

		</div>
	</body>
</html>
 
