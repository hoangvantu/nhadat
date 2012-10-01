<!-- BEGIN: load jquery -->
<script src="{$smarty.current_dir|replace:'\\':'/'}/js/jquery-1.6.4.min.js" type="text/javascript"></script>
<script type="text/javascript" src="{$smarty.current_dir|replace:'\\':'/'}/js/jquery-ui/jquery.ui.core.min.js"></script>
<script src="{$smarty.current_dir|replace:'\\':'/'}/js/jquery-ui/jquery.ui.widget.min.js" type="text/javascript"></script>
<script src="{$smarty.current_dir|replace:'\\':'/'}/js/jquery-ui/jquery.ui.accordion.min.js" type="text/javascript"></script>
<script src="{$smarty.current_dir|replace:'\\':'/'}/js/jquery-ui/jquery.effects.core.min.js" type="text/javascript"></script>
<script src="{$smarty.current_dir|replace:'\\':'/'}/js/jquery-ui/jquery.effects.slide.min.js" type="text/javascript"></script>
<!-- END: load jquery -->
<!-- BEGIN: load jqplot -->
<link rel="stylesheet" type="text/css" href="{$smarty.current_dir|replace:'\\':'/'}/css/jquery.jqplot.min.css" />
<!--[if lt IE 9]><script language="javascript" type="text/javascript" src="{$smarty.current_dir|replace:'\\':'/'}/js/jqPlot/excanvas.min.js"></script><![endif]-->
<script language="javascript" type="text/javascript" src="{$smarty.current_dir|replace:'\\':'/'}/js/jqPlot/jquery.jqplot.min.js"></script>

<script language="javascript" type="text/javascript" src="{$smarty.current_dir|replace:'\\':'/'}/js/jqPlot/plugins/jqplot.barRenderer.min.js"></script>
<script language="javascript" type="text/javascript" src="{$smarty.current_dir|replace:'\\':'/'}/js/jqPlot/plugins/jqplot.pieRenderer.min.js"></script>
<script language="javascript" type="text/javascript" src="{$smarty.current_dir|replace:'\\':'/'}/js/jqPlot/plugins/jqplot.categoryAxisRenderer.min.js"></script>
<script language="javascript" type="text/javascript" src="{$smarty.current_dir|replace:'\\':'/'}/js/jqPlot/plugins/jqplot.highlighter.min.js"></script>
<script language="javascript" type="text/javascript" src="{$smarty.current_dir|replace:'\\':'/'}/js/jqPlot/plugins/jqplot.pointLabels.min.js"></script>
<!-- END: load jqplot -->

<script src="{$smarty.current_dir|replace:'\\':'/'}/js/setup.js" type="text/javascript"></script>
{literal}
 <script type="text/javascript">
         
    $(document).ready(function () 
    {
        setupLeftMenu();
        setSidebarHeight();
           
           
    });
 </script>
{/literal}