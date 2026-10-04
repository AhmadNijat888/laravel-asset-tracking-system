<!DOCTYPE html>
<html lang="ps" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ننوتل | د شتمنیو تعقیب سیسټم</title>
    <meta name="description" content="د شتمنیو د تعقیب سیسټم - د شرکت شتمنۍ مدیریت">
    <meta name="keywords" content="Asset Tracking System, شتمنو مدیریت سیستم">
    <meta name="author" content="Ahmad Nijat Agha">
    <link rel="stylesheet" href="{{ asset('css/style.css')}}">
    <script src="{{ asset('js\login_page.js') }}" defer></script>
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

    <div id="login" class="section login">
        <h2>سیستم ته ننوتل</h2>
        <div class="login-box card-hover">

            <div id="errorContainer" style="display: none;"></div>

            <form id="loginForm">
                <div class="input-group">
                    <label>د کارونکي نوم</label>
                    <input type="text" id="username" placeholder="خپل نوم دننه کړئ !">
                    <small id="usernameError" class="error-text"></small>
                </div>
                <div class="input-group">
                    <label>پاسورډ</label>
                    <input type="password" id="password" placeholder="********">
                    <small id="passwordError" class="error-text"></small>
                </div>
                <div class="input-group">
                    <label>رول</label>
                    <select id="role">
                        <option>اداري مسؤل</option>
                        <option>مدیر</option>
                        <option>کارکوونکی</option>
                    </select>
                    <small id="roleError" class="error-text"></small>
                </div>
                <button type="submit" class="btn btn-blue btn-block">ننوتل</button>
            </form>
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
