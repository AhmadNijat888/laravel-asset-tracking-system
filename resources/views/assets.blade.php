<!DOCTYPE html>
<html lang="ps" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>شتمنۍ | د شتمنیو تعقیب سیسټم</title>
    <meta name="description" content="د شتمنیو د تعقیب سیسټم - د شرکت شتمنۍ مدیریت">
    <meta name="keywords" content="Asset Tracking System, شتمنو مدیریت سیستم">
    <meta name="author" content="Ahmad Nijat Agha">
    <link rel="stylesheet" href="{{ asset('css/style.css')}}">
    <script src="{{ asset('js\asset_page.js') }}" defer></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>

<body>

<header class="header">
    <div class="header-inner">
        <div class="logo">د شتمنیو تعقیب سیسټم</div>
        <nav class="main-nav">
        <ul class="nav">
        <li><a href="/index" class="active">کور پاڼه</a></li>
            <li><a href="/login">ننوتل</a></li>
            <li><a href="/dashboard">ډشبورډ</a></li>
            <li><a href="/assets">شتمنۍ</a></li>
            <li><a href="/search">پلټل</a></li>
            <li><a href="/reports">راپورونه</a></li>
            <li><a href="/contact">اړیکي</a></li>
        </ul>
        </nav>
    </div>
</header>

<div class="main">

    <div id="assets" class="section assets">
        <h2>د شتمنیو مدیریت</h2>
        <div class="add-asset card-hover">
            <h3>نوې شتمني اضافه کړئ</h3>
            
            <div id="assetErrorContainer" style="display: none;"></div>
            
            <form id="assetForm">
                <div class="row">
                    <div class="input-group">
                        <label>د شتمني نوم</label>
                        <input type="text" id="assetName" placeholder="لپ ټاپ">
                        <small id="assetNameError" class="error-text"></small>
                    </div>
                    <div class="input-group">
                        <label>ډول</label>
                        <input type="text" id="assetType" placeholder="برېښنایی">
                        <small id="assetTypeError" class="error-text"></small>
                    </div>
                </div>
                <div class="row">
                    <div class="input-group">
                        <label>څانګه</label>
                        <select id="assetDepartment">
                            <option value="">څانګه انتخاب کړئ</option>
                            <option value="IT">IT</option>
                            <option value="مالي">مالي</option>
                            <option value="HR">HR</option>
                            <option value="مارکیټینګ">مارکیټینګ</option>
                        </select>
                        <small id="assetDepartmentError" class="error-text"></small>
                    </div>
                    <div class="input-group">
                        <label>حالت</label>
                        <select id="assetStatus">
                            <option value="">حالت انتخاب کړئ</option>
                            <option value="فعال">فعال</option>
                            <option value="ساتنه">ساتنه</option>
                            <option value="توزیع شوی">توزیع شوی</option>
                        </select>
                        <small id="assetStatusError" class="error-text"></small>
                    </div>
                </div>
                <button type="submit" class="btn btn-blue">ثبت کړئ</button>
            </form>
        </div>
        
        <div class="asset-list card-hover">
            <h3>د شتمنیو لیست</h3>
            <div class="table-wrap">
                <table id="assetsTable">
                    <thead>
                        <tr><th>ID</th><th>نوم</th><th>حالت</th><th>عملیات</th></tr>
                    </thead>
                    <tbody id="assetsTableBody">
                        <!-- Assets are loaded dynamically by Javascript-->
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>

<div class="footer">
    <div class="footer-inner">
        <div class="footer-col">
            <h4>د شتمنیو تعقیب سیسټم</h4>
            <p>د شتمنیو د مدیریت لپاره بشپړ سیسټم</p>
            <p>دقت، امنیت، او موثریت</p>
        </div>
        <div class="footer-col">
            <h4>چټک لینکونه</h4>
            <ul>
                <li><a href="/index">کور</a></li>
                <li><a href="/login">ننوتل</a></li>
                <li><a href="/dashboard">ډشبورډ</a></li>
                <li><a href="/assets">شتمنۍ</a></li>
                <li><a href="/reports">راپورونه</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>اړیکه</h4>
            <p>📧 Ahmadnigatnigat@gmail.com</p>
            <p>📞 ۷۰۶۰۰۸۶۵۰(۹۳+)</p>
            <p>📍 کندهار، افغانستان</p>
            <p>🕘 شنبه - پنجشنبه ۸صبح - ۴مازیګر</p>
        </div>
        <div class="footer-col">
            <h4>تعقیب مو کړئ</h4>
            <ul>
                <li><a href="https://www.facebook.com" class="fab fa-facebook"> فیسبوک</a></li>
                <li><a href="https://www.instagram.com" class="fab fa-instagram"> انسټاګرام</a></li>
                <li><a href="https://www.x.com" class="fab fa-twitter"> ټویټر</a></li>
                <li><a href="https://www.linkedin.com" class="fab fa-linkedin"> لینکډین</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>© ۲۰۲۶ د شتمنیو تعقیب سیسټم | ټول حقونه خوندي دي</p>
    </div>
</div>

</body>
</html>
