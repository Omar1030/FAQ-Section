// ! DOM ELements
let faq_list = document.getElementById("faq-list");

// ! Variables
const questions = [
  "How can I reset my password?", 
  "How do I contact support?", 
  "Is my personal information safe on HelpMe?", 
  "Can I use HelpMe on mobile devices?", 
  "Do I need to pay to use HelpMe?", 
  "What should I do if I see unusual activity on my account?", 
  "Can I change or delete my account information?"];
const answers = [
  "You can reset your password by clicking “Forgot Password” on the login page. Follow the instructions in the email we send you to create a new password.",
  "Click the “Contact Us” link in the footer, or go to the Help Center and submit a request. Our support team is available 24/7.",
  "Yes. We use end-to-end encryption and follow strict security standards to keep your data safe.",
  "Absolutely! HelpMe works on both Android and iOS, and you can also use it directly in your mobile browser.",
  "HelpMe is free for basic use. Premium features are available with a subscription, which you can upgrade to anytime.",
  "Immediately reset your password and contact our support team. We’ll help secure your account and investigate the issue.",
  "Yes. You can edit your profile details from the Account Settings page. If you want to delete your account, contact our support team and we’ll guide you through the process.",
];

// ! Function : Render Questions
questions.forEach((q, i) => {
  let li = document.createElement("li");
  li.setAttribute("id", i);
  li.setAttribute("class", "faq-list-item");
  li.classList.add("p-3", "rounded-2", "mb-3");
  li.innerHTML = `<article class="faq-list-item-q d-flex align-items-center gap-2">
                      <div id="icon-${i}" class="icon"><i class="fa-solid fa-plus"></i></div>
                      <h2 id="qh-${i}" class="faq-list-item-qh mb-0">${q}</h2>
                  </article>
                  <p id="ans-${i}" class="faq-list-item-a mt-1 mb-0">${answers[i]}</p>`;
  faq_list.appendChild(li);
});

// ! Function : Ready
$("document").ready(function () {
  $(".faq-list-item").click(function () {
    toggleQuestion(this);
  });
});

// ! Function : Toggle Question
function toggleQuestion(item) {
  checkTargetItem(item);
}

// ! Function : Check Target Item
function checkTargetItem(item) {
  $(`#ans-${item.id}`).slideToggle("slow");
  $(`#qh-${item.id}`).toggleClass("active");
  $(`#icon-${item.id}`).toggleClass("active");
  toggleIcon(item);
}

// ! Function : Toggle Icon
function toggleIcon(item) {
  if ($(`#qh-${item.id}`).hasClass("active")) {
    $(`#icon-${item.id}`).html('<i class="fa-solid fa-minus"></i>');
  } else {
    $(`#icon-${item.id}`).html('<i class="fa-solid fa-plus"></i>');
  }
}
