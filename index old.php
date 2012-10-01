<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="vi" lang="vi">
	<head>

		<?php
		include 'headmeta.php';
		include 'jsajaxregister.php';
		include 'jsrongbayok.php';
		include 'jstinymce.php';
		//include 'rongbay/cssrongbay.php';
		// include 'rongbay/jsrongbay.php';
		?>
		<link rel="shortcut icon" href="/sites/default/files/favicon.png" type="image/x-icon" />
		
		
		<script type="text/javascript">
			<!--//--><![CDATA[//><!--
			jQuery.extend(Drupal.settings, {
				"basePath" : "/",
				"dhtmlMenu" : {
					"slide" : "slide",
					"siblings" : "siblings",
					"relativity" : "relativity",
					"children" : "children",
					"doubleclick" : "doubleclick",
					"clone" : 0
				},
				"googleanalytics" : {
					"trackOutgoing" : 1,
					"trackMailto" : 1,
					"trackDownload" : 1,
					"trackDownloadExtensions" : "7z|aac|avi|csv|doc|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xml|zip"
				},
				"cron" : {
					"basePath" : "/poormanscron",
					"runNext" : 1346554101
				},
				"tabs" : {
					"slide" : false,
					"fade" : false,
					"speed" : "fast",
					"auto_height" : false,
					"next_text" : "next",
					"previous_text" : "previous"
				}
			});
			//--><!]]>
		</script>
		<script type="text/javascript">
			<!--//--><![CDATA[//><!--
			$().ready(function() {
				$("#edit-new-keywords").autocomplete([], {
					"minChars" : 0
				});
			})
			//--><!]]>
		</script>
		<!--[if lte IE 7]><link type="text/css" rel="stylesheet" media="all" href="/sites/all/themes/framework/fix-ie.css" /><![endif]--><!--If Less Than or Equal (lte) to IE 7-->

		<style type="text/css">
			#menu {
				position: fixed;
				left: 0%;
				top: 20%;
				width: 8em;
				margin: -2.5em 0 0 0;
				z-index: 5;
				background: hsla(80, 90%, 40%, 0.7);
				color: white;
				font-weight: bold;
				font-size: large;
				text-align: left;
				border: solid hsla(80, 90%, 40%, 0.5);
				border-right: none;
				padding: 0.5em 0.5em 0.5em 0.5em;
				box-shadow: 0 1px 3px black;
				border-radius: 0em 3em 3em 0em;
			}
			#menu li {
				margin: 0
			}
			#menu a {
				color: inherit
			}

			/* Make menu absolute, not fixed, on IE 5 & 6 */
			#menu {
				position: absolute
			}
			* > #menu {
				position: fixed
			}

			p.stb {
				text-indent: 0;
				margin-top: 0.83em
			}
			p.mtb {
				text-indent: 0;
				margin-top: 0.17em
			}
			p.ltb {
				text-indent: 0;
				margin-top: 0.08em
			}
		</style>

	</head>
	<body class="sidebars">
		<!--<div style="background-color: #F66; padding: 5px; text-align: center;"><strong>Development version of Framework 6.x-2.3</strong></div>-->
		<!-- Layout -->
		<div class="floatright" style="float:right;
		width:10%;
		position: fixed;
		right:3em;
		top:0em;">
			Quảng cáo bên tay phải
		</div>

		<div class="floatleft" style="float:right;width:10%;position: fixed;left:0em;top:0em;">
			<ul id='menu' >
				<li>
					<a href="?action=quanly">Quản lý tin đăng</a>
					<li>
						<a href="?action=register">Đăng ký</a>
						<li>
							<a href="?action=viewlist">Danh sách tin</a>
							<li>
								<a href="?action=edit&newsid=5">Sửa tin</a>
								<li>
									<a href="?action=dangtin">Đăng tin</a>
									<li>
										<a href="?action=view&newsid=5">Xem tin</a>
			</ul>
		</div>
		<div id="wrapper">

			<div id="ground">

				<div id="inner-ground">
					<div id="bottom-ground">

						<div id="header">
							<?php

							//    include 'headerrongbay.php';
							?>
							<?php
							include 'header.php';
							?>

						</div>

						<!-- / end #header -->

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

							<div id="sidebar-left" class="sidebar">
								<?php
								include 'menuleft.php'
								?>
							</div>
							<!-- /#sidebar-left -->

							<div id="footer" class="clear">
								<?php
								include 'footer.php';
								?>
							</div>
							<!-- /#footer -->

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

		<script type="text/javascript" src="/sites/default/files/js/js_3ca35e963142807172f539e3d0e61298.jsmin.js"></script>
		<script type="text/javascript">
			<!--//--><![CDATA[//><!--
			var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
			document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
			//--><!]]>
		</script>
		<script type="text/javascript">
			<!--//--><![CDATA[//><!--
			try {
				var pageTracker = _gat._getTracker("UA-7905545-6");
				pageTracker._trackPageview();
			} catch(err) {
			}
			//--><!]]>
		</script>

		<div>
			<!--- Ads by Ambient Digital
			<script type="text/javascript" language="javascript" src="http://delivery.adnetwork.vn/247/adclick/ads_em9uZV9NVEk1TXpBd01UZzNNMTh4TWpnd09URTNNREkwWHpJME1GOHlNREE9Lmh0bWxVNzI4STdWRTEwMTAxMDc4Mk0zOFc=/"></script>
			Ads by Ambient Digital --->

		</div>
	</body>
</html>
