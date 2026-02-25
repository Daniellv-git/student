
<p>Cookies: <span id="cookieCount">0</span></p>
<button onclick="clickCookie()">
    🍪
</button>

<script>
let cookies = 0;

function clickCookie() {
    cookies += 1;
    document.getElementById("cookieCount").textContent = cookies;
}
</script>