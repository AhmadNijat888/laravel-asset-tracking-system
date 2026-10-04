<!DOCTYPE html>
<html lang="ps" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>پلټل | د شتمنیو تعقیب سیسټم</title>
    <meta name="description" content="د شتمنیو د تعقیب سیسټم - د شرکت شتمنۍ مدیریت">
    <meta name="keywords" content="Asset Tracking System, شتمنو مدیریت سیستم">
    <meta name="author" content="Ahmad Nijat Agha">
    <link rel="stylesheet" href="{{ asset('css/style.css')}}">
    <script src="{{ asset('js\search_page.js') }}" defer></script>
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

    <div id="search" class="section search">
        <h2>پلټل او فلتر</h2>
        
        <div id="searchErrorContainer" style="display: none;"></div>
        
        <div class="search-box card-hover">
            <div class="filters">
                <input type="text" id="searchInput" placeholder="د شتمني نوم یا ID">
                <select id="statusFilter">
                    <option value="">ټول حالتونه</option>
                    <option value="فعال">فعال</option>
                    <option value="ساتنه">ساتنه</option>
                </select>
                <select id="departmentFilter">
                    <option value="">ټولې څانګې</option>
                    <option value="IT">IT</option>
                    <option value="مالي">مالي</option>
                    <option value="HR">HR</option>
                </select>
                <button id="searchBtn" class="btn btn-blue">پلټل</button>
                <button id="resetBtn" class="btn btn-white">بیا تنظیمول</button>
            </div>
            <small id="searchError" class="error-text"></small>
        </div>
        
        <div class="search-results card-hover">
            <h3>د پلټلو پایلې</h3>
            <div class="table-wrap">
                <table id="searchResultsTable">
                    <thead>
                        <tr><th>ID</th><th>نوم</th><th>حالت</th><th>څانګه</th></tr>
                    </thead>
                    <tbody id="searchResultsBody">
                        <tr>
                            <td>AST-101</td>
                            <td>ډیل لپټاپ</td>
                            <td>فعال</td>
                            <td>IT</td>
                        </tr>
                        <tr>
                            <td>AST-102</td>
                            <td>ایج پی پرنټر</td>
                            <td>ساتنه</td>
                            <td>مالي</td>
                        </tr>
                        <tr>
                            <td>AST-103</td>
                            <td>سمسونګ ټبلیټ</td>
                            <td>فعال</td>
                            <td>HR</td>
                        </tr>
                        <tr>
                            <td>AST-104</td>
                            <td>لينوو لپټاپ</td>
                            <td>فعال</td>
                            <td>IT</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="noResultsMsg" style="display: none; text-align: center; padding: 20px; color: #666;">
                د پلټلو پایلې ونه موندل شول
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