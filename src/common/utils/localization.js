import React, { PropTypes } from 'react'
import { Link } from "react-router-dom"
import { pagesUrls } from "../navigation/navigationConstants"

const localisation = {
  'EN-GB': {
    overview_title: <span>TheoryMine lets you name a personalised, newly discovered, mathematical theorems as a novelty
      gift.</span>,
    overview_tagline: <span>Name your very own mathematical theorem, newly discovered by one of the world's most advanced
      computerised theorem provers (a kind of robot mathematician), and you can immortalise your loved ones, teachers,
      friends and even yourself and your favourite pets.</span>,
    overview_see_example: <span>See an example theorem certificate</span>,
    overview_you: <span>YOU</span>,
    overview_we: <span>WE</span>,
    overview_they: <span>THEY</span>,
    overview_you2: <span>choose a name</span>,
    overview_we2: <span>discover a theorem</span>,
    overview_they2: <span>get a great gift</span>,
    overview_get_started: <span>Get Started:</span>,
    overview_choose: <span>Choose your Theorem Name</span>,
    overview_preview: <span>Preview your theorem!</span>,
    overview_eg: <span>e.g. Tom's theorem, or The Bucklesham lemma</span>,

    //page_discover

    discover_title: 'Name a new theorem',
    discover_15: <span>Only &pound;15.00</span>,
    discover_imagetag: <span>*This is just an illustration, it is not the certificate that you will receive.</span>,
    discover_part1: 'By placing an order with TheoryMine, you name a newly discovered mathematical theorem. This lets you immortalise your loved ones, teachers, friends and even yourself and your favourite pets! It may take upto 6 working days (excluding weekends) for our robot mathematicians to discover your theorem. We do NOT send printed copies. Once discovered we will send you a notification by email that your theorem is ready with links to let you download a certificate of the discovery.',
    discover_see_ex: <span>See an example certificate</span>,
    discover_part2: <span>To buy our gift items you first need topurchase a theorem. Once you receive this you will be able
      to follow the &quot;Gift Items Shop&quot;  link next to your theorem name on your profile page</span>,

    discover_part3: <span>N.B.: If you would like your theorem to be sent to a specific email address, please make sure you
      are registered and logged in with this email address. Otherwise TheoryMine will use your PayPal email
      address.</span>,
    discover_part4: <span>You can place an order by sending us a payment of 15 UK pounds using Paypal. Please indicate the
      theorem name in "special instructions to seller section, and we will send you a newly discovered theorem within 7
      business days.</span>,
    discover_choose: <span>Choose your Theorem Name:</span>,
    discover_eg: <span>e.g. Tom's theorem, or The Bucklesham lemma</span>,
    discover_tc1: <span>I have read and accept the</span>,
    discover_tc2: <span>Terms and Conditions of the TheoryMine website</span>,
    discover_sub1: <span>Once your order has been placed, you will receive a user name and password to</span>,
    discover_sub2: <span>to this website. You can login at any time to view the status of your order, view the theorems you
      have named, as well as download the certificate for these theorems.</span>,
    discover_sub3: <span>Theorems are discovered by our robot mathematicians, we make every effort to ensure that the
      discovered theorems have never been published before, and we guarantee that every theorem we discover has not been
      previously recorded in our database of theorems. In the unlikely event that that there is a mathematics article
      publishing the theorem prior to our discovery, then we will give two additional new theorems to the owner of the
      old theorem. For more information on how we ensure that our discovered mathematics is new, see the</span>,
    discover_choose2: <span>Choose the language for your brochure and emails:</span>,

    discover_voucher: <span>Got a voucher?</span>,
    discover_confirm: <span>confirm</span>,
    discover_voucher_valid: <span>discount voucher, ONLY ¬£5 per theorem now! </span>,
    discover_voucher_invalid: <span>invalid</span>,
    discover_5: <span>Only &pound;5.00</span>,

    //faq

    faq_title: <span>F.A.Q.</span>,
    faq_about: <span>WHO IS THEORYMINE? (about us!)</span>,
    faq_sec1: <span>About your purchase</span>,
    faq_sec2: <span>About how TheoryMine works</span>,
    faq_q1: <span>WHAT CAN I BUY FROM THEORYMINE?</span>,
    faq_q2: <span>WHAT IS GOING TO HAPPEN WHEN I PURCHASE A THEOREM?</span>,
    faq_q3: <span>WILL I BE ABLE TO PURCHASE EXTRA ITEMS WITH MY THEOREM ONCE I PURCHASED MY THEOREM?</span>,
    faq_q4: <span>CAN I CHOOSE THE THEOREM I NAME?</span>,
    faq_q5: <span>CAN I CHANGE THE NAME OF MY THEOREM AFTER IT HAS BEEN PURCHASED?</span>,
    faq_q6: <span>WHAT CAN I CALL A THEOREM?</span>,
    faq_q7: <span>WHICH METHODS OF PAYMENT DO YOU ACCEPT?</span>,
    faq_q8: <span>WHY HASN'T MY THEOREM ARRIVED BY THE DEADLINE YOU PROMISED?</span>,
    faq_q9: <span>WHY IS MY CERTIFICATE NOT FORMATTED CORRECTLY?</span>,
    faq_q10: <span>WHAT IS A THEORY?</span>,
    faq_q11: <span>WHAT IS A THEOREM?</span>,
    faq_q12: <span>WHAT IS A RECURSIVE DEFINITION?</span>,
    faq_q13: <span>WHAT KIND OF THEOREM DOES THEORYMINE DISCOVER?</span>,
    faq_q14: <span>HOW CAN I BE SURE THAT THE PROOF OF MY THEOREM IS CORRECT?</span>,
    faq_q15: <span>HOW IS IT POSSIBLE TO GENERATE THEOREMS?</span>,
    faq_q16: <span>HOW CAN I BE SURE MY THEOREM IS ORIGINAL?</span>,
    faq_q17: <span>HOW CAN I BE SURE THAT MY THEOREM IS NOT TRIVIALLY TRUE?</span>,
    faq_q18: <span>IS MY THEOREM INTERESTING?</span>,
    faq_q19: <span>BY WHAT AUTHORITY CAN I ASSIGN A NAME TO MY THEOREM?</span>,
    faq_q20: <span>WHY DO YOU CLAIM THAT THEOREMS LAST FOR EVER?</span>,
    faq_a1: <span>You can buy new theorems which become yours to name. You will receive a printable certificate in PDF form
      of the theorem and its discovery (including an outline of the proof). You can then give this away, frame it, sing
      it, as you like! Also, you can purchase a range of products to go with your theorem, like T-shirts, mouse mats and
      mugs. All gift items are provided and manufactured by Zazzle.</span>,
    faq_a2: <span>If you are not already registered with TheoryMine, you will receive a user name and password to log into
      the website where you will be able to view the status of your order. It will take a up to 5 working days
      (excluding weekends) for our robot mathematicians to discover your theorem. You will receive a notification email
      once your theorem is discovered. You will then be able to download the certificate by logging into this website,
      and clicking &quot;View Certificate&quot;</span>,
    faq_a3: <span>Yes. You will be able to purchase additional gift packages (t-shirts, mugs and mouse mats) with your
      theorem once you have received your certificate. You can do so by logging in to your account and click on the
      "Gift Items Shop " link next to your theorem name.</span>,
    faq_a4:
      <span>No. The next theorem that our robot mathematicians discover will be given the name you have chosen.</span>,
    faq_a5: <span>No. Once a name has been given to a Theorem, that is the name the theorem will have forever. However, if
      you have just ordered a theorem and your order has not been fulfilled yet, you can change your theorem name by
      emailing us at support@theorymine.co.uk</span>,
    faq_a6: <span>You can call a Theorem whatever you like as long as the name its not inappropriate, libellous,
      defamatory, blasphemous, obscene, offensive to public morality or an incitement to racial hatred or
      terrorism.</span>,
    faq_a7: <span>Payments are carried out on our behalf by PayPal, one of the most popular, secure and established payment
      gateways. PayPal's pages offer the highest level of security and encryption. Users should be reassured by the
      internet standard padlock symbol which will be displayed whilst you are entering your card details. We do not hold
      or see your card details as these are processed directly by PayPal.</span>,
    faq_a8: <span>Note that if you are not logged into your account when you purchase from our website, your notification
      email will come to the email address you have registered with PayPal. Please check that email account to see if
      your notifications emails have arrived. If so, you will also be able to log into the TheoryMine website using the
      user name and password we have sent you. If your notification email has not arrived by the deadline we specify
      above or, if it has, but your certificate is not available at &quot;View Certificate&quot; when you log in, then
      please email us at support@theorymine.co.uk and we will find out what has gone wrong asap.</span>,
    faq_a9: <span>Some PDF readers might not support the mathematical characters that appear in the certificate. You might
      not see these characters when you open the certificate or when you print it. However, if you use Adobe Reader
      (available for free <a href="http://get.adobe.com/reader/">here</a>) you will not have any of these problems.'
    </span>,
    faq_a10: <span>From school mathematics you will recall various kinds of numbers: whole numbers, fractions, decimals,
      etc. You may also have met sets or vectors. These are all examples of mathematical
        objects. The first thing that TheoryMine does is create new kinds of mathematical object and it can generate
      an unlimited number of these. In school mathematics you apply functions
      to numbers, such as addition and subtraction. The second thing that TheoryMine does is create new kinds of
      functions on these new mathematical objects. TheoryMine can also generate an unlimited number of functions. A
      Theory is composed of one or more mathematical objects plus some functions on such mathematical objects.</span>,
    faq_a11: <span>A theorem is a mathematical formula for which we have a
      proof. Both theorems and proofs are within a theory which consists of a set of axioms. A proof is a sequence of
      formulae, starting with some axioms and ending with the theorem. Each non-axiom formula in this sequence follows
      from the previous formulae in the sequence. All the axioms in TheoryMine theories are recursive definitions.</span>,
    faq_a12: <span>>Recursion is a mathematical technique that is much
      used in computer programs. In a recursive definition, the value of a recursive function is defined in terms of
      values of the same function applied to smaller inputs. This sounds circular, but because the function's inputs
      get smaller and smaller the computation eventually stops.TheoryMine also uses recursion to define brand new types
      of input and output for each theory.These are called recursive objects. </span>,
    faq_a13: <span>TheoryMine proves properties of functions. For instance, when it comes to addition, it does not matter
      in which order the numbers are added: 2+3 is equal to 3+2, whereas when it comes to subtraction it does: 2-3 is
      not equal to 3-2. TheoryMine might discover that some of its functions are like addition; giving equal answers
      whatever the order of the objects to which they are applied. Some functions are inverses of each other, e.g.
      addition and subtraction: adding a number and then subtracting it, brings you back to where you started.
      TheoryMine might also discover that some of its new functions are also inverses. The theorems discovered by
      TheoryMine typically take this simple form.</span>,
    faq_a14: <span>The computer programs behind TheoryMine are large and complex and so, like all large complex programs,
      almost certainly contain bugs However, most of the program merely chooses theories and theorems to prove, and
      directs their proof. The construction of the proof is handled by a small, well inspected and highly trusted kernel
      program that only combines axioms and previously proved theorems. It is therefore vanishingly unlikely that any
      proof it constructs would be faulty.</span>,
    faq_a15: <span>TheoryMine is based on decades of world-class research into automated reasoning and artificial
      intelligence at the Universities of Edinburgh, Cambridge and Munich. It uses the grammars of theories and theorems
      to generate candidates, filters out the obviously false and uninteresting ones, and then uses automated reasoning
      to see which of the remainder it can prove.</span>,
    faq_a16: <span>The TheoryMine program constructs brand new mathematical theories, that no-one has previously developed
      by using brand new recursive functions and recursive objects. By definition, all theorems of these new theories
      are themselves brand new.</span>,
    faq_a17: <span>There are two senses in which your theorem is not trivially true. Firstly, note that some mathematical
      theories are inconsistent i.e. the axioms contradict each other. In such theories all formulae are theorems, which
      is clearly undesirable. However, it is a well-established mathematical result that theories consisting only of
      recursive definitions, as TheoryMine's theories are, are inherently consistent. So you can be sure that your
      theorem is not trivial in this sense. The second sense in which these theorems are not trivially true is that they
      cannot be directly derived by a simple calculation. In particular, they are not true by simple rewriting from
      other known theorems, as described in more detail in the answer to the question: <a href="#interesting">IS MY
        THEOREM INTERESTING?</a>.</span>,
    faq_a18: <span>TheoryMine applies a series of filters to remove uninteresting theorems before it generates them. On the
      other hand, don't expect your theorem to earn you the Fields Medal! (the Nobel Prize of Mathematics). In
      particular, we use the notion of interesting initially developed in <a
        href="http://www.springerlink.com/content/bk711q2u247mr967">Conjecture Synthesis for Inductive Theories (Journal
        of Automated Reasoning)</a> which was then further developed in <a
        href="http://www.springerlink.com/content/m885557421m7418m">Scheme-Based Synthesis of Inductive Theories (LNCS,
        Volume 6437)</a>.Technically, this ensures that standard orderings, using known theorems as rewrites, cannot
      prove the new theorem : that there is no direct symbolic calculational proof of the new theorem. </span>,
    faq_a19: <span>It is a long-standing tradition in mathematics that the author of a new theorem has the authority to
      name it. TheoryMine assigns that authority to you.</span>,
    faq_a20: <span>A theorem, once proved, stays proved for ever. The reasoning in the proof is deductive, so contains no
      element of probability or uncertainty. Theorems are abstract objects that are not subject to wear and tear. Even
      diamonds will be destroyed in the heat death of the universe; theorems won't be.</span>,

    //about

    about_title: <span>About Us:</span>,
    about_p1: <span>TheoryMine is a company dedicated to <a href="http://dream.inf.ed.ac.uk/events/automatheo-2010/">automated
      theory exploration</a>: we develop artificial intelligence techniques to discover new mathematical concepts and
      automate proof. By providing some fun applications of theorem proving (e.g. naming new
        theorems!), we sponsor more serious applications of automated reasoning technology. In particular, we are
      working on verification tools to make software more reliable and safe to use, as well as tools to ease the
      exploration of new mathematical concepts</span>,
    about_p2: <span>Our software builds on decades of research by the international community in automated reasoning,
      notably the work in <a href="http://itp2011.cs.ru.nl/ITP2011/Home.html">interactive theorem proving</a> as well as
      <a href="http://cade23.ii.uni.wroc.pl/">automated deduction</a>. They provide amazing software which deserves to
      be more widely used and appreciated.</span>,
    about_p3: <span>TheoryMine was started by a group of researchers in the <a
      href="http://www.ed.ac.uk/schools-departments/informatics/">School of Informatics</a> at <a
      href="http://www.ed.ac.uk/">University of Edinburgh</a>, we are:</span>,
    about_alan: <span>Managing Director of TheoryMine and Professor of Automated Reasoning in the School of Informatics,
      University of Edinburgh, FRS, FREng, FACM.</span>,
    about_fla: <span>Graduated in Artificial Intelligence and Mathematics from the University of Edinburgh. </span>,
    about_lucas: <span>Formerly CTO of TheoryMine and senior researcher with the Mathematical Reasoning Group, part of the
      Centre for Intelligent Systems and their Applications, in the School of Informatics, at the University of
      Edinburgh.</span>,
    about_moa: <span>Assistant professor at Chalmers University of Technology in Gothenburg, Sweden. She did her PhD in the
      Mathematical Reasoning Group at the University of Edinburgh.</span>,
    about_roy: <span>Senior Research Fellow at the School of Informatics, University of Edinburgh and member of the Centre
      for Intelligent Systems and their Applications.</span>,

    //products

    gift_title: <span>Gift Packs:</span>,
    gift_p1:
      <span>When you name a theorem you attach your name to something that will survive throughout history.</span>,
    gift_p2: <span>The creation of a working mathematical theorem or law usually requires extensive work by a rare and
      brilliant mind. This gives the creator the right to have the theorem take their name; names like Gauss, Fermat and
      Pythagoras. Now anyone who wants to have their name immortalised along with the giants of maths and science can do
      so. This is possible thanks to a system that generates and proves completely new theories and theorems.The
      theorems that we produce are guaranteed to be unique, because we generate them from unique theories. Inductive
      theories are guaranteed to be consistent, by design, so the generated theorems are not spuriously true.</span>,
    gift_p3: <span>You can name a new theorem however you like and you will be able to decide if you would like to have a
      certificate detailing your theorem delivered to you, have it published in our journal, and even have it printed on
      a t-shirt!</span>,
    gift_h1: <span>NAME A THEOREM + PDF CERTIFICATE: &pound;15</span>,
    gift_h2: <span>GIFT ITEMS:</span>,
    gift_h1_1: <span>When you buy a theorem you will receive:</span>,
    gift_li1_1: <span>An printable electronic colour PDF Certificate of registration, with the theorem that you named and
      the name that you have chosen to attach to it forever.</span>,
    gift_li1_2: <span>A brochure which will help you interpret your theorem</span>,
    gift_li1_3: <span>A user name and password to log in our website and view your theorems and certificates at any
      time</span>,
    gift_h1_2: <span>In addition you can purchase any of these extras stating your theorem:</span>,
    gift_li2_1: <span>A t-shirt:from &pound;14.10</span>,
    gift_li2_2: <span>A mug:from &pound;12.35</span>,
    gift_li2_3: <span>A mouse mat:from &pound;10.10</span>,
    gift_provider: <span>All gift items are provided and manufactured by <a href="http://www.zazzle.co.uk/">Zazzle</a>'
    </span>,
    gift_end: <span>To buy a gift item first purchase a theorem. Once you receive this you will be able to follow the "Gift
      Items Shop" link next to your theorem name on your profile page</span>,

    //Testimonials

    tes_title: <span>Testimonials:</span>,
    tes_p1: <span>"This really captured my imagination and I&#39;m delighted to buy TheoryMine&#39;s first Theorem. What an
      inventive use of Scotland&#39;
      s expertise in artificial intelligence to create such a novel and fun product"</span>,
    tes_p2: <span>"During my time as an eager undergraduate mathematician, I'd often wonder what it would feel like to
      prove a truly new result and have my name immortalised in the mathematical history books. I thought that dream had
      died when I gave up maths to become a science writer, but Aron's theorem is now a reality"</span>,
    tes_p3: <span>"This is a superb example of innovation and creation."</span>,
    tes_p4: <span>"The theorems start at &pound;15 each; &pound;20 cheaper than changing your name to Pythagoras by deed
      poll"</span>,
    tes_p5: <span>"This year's naming gift is this ingenious (or possibly even genius) one."</span>,
    tes_p6: <span>"It&#39;s never too early to start enjoying maths, and this is a present that will last a
      lifetime."</span>,
    tes_p7: <span>Listen to BBC's Material World Interview</span>,

    //Abuse

    abuse: <span>Thank your reporting abuse of the system. We will do our best to investigate the incident.</span>,

    //Bad_cert_id

    badid_title: <span>Bad certificate id</span>,
    badid_p: <span>It looks like you entered a incomplete or incorrect certificate link. Please check your certificate
      link. If you continue to have a problem, please</span>,

    //Cancellation

    canc_title: <span>Cancellation Policy</span>,
    canc_p: <span>When you buy from TheoryMine your theorem is produced specifically for you. Therefore you can cancel at
      any time before production begins. All you have to do is email us on support@theorymine.co.uk and we will get your
      money refunded and order cancelled. If production has begun then unfortunately we cannot refund your order. If
      your order is not satisfactory (i.e.-theorem is not unique) then you can certainly let us know and have your
      theorem refunded.</span>,

    //Timeout

    timeout_title: <span>You have been logged out</span>,
    timeout_p1: <span>You get automatically logged out after </span>,
    timeout_p2: <span>minutes of inactivity, or if you try to access a restricted page. To continue, login
      again; this login link will open in another window and then you can try to reload this page.</span>,
    //unlock
    unlock_title: <span>Account Unlocked!</span>,
    unlock_success: <span>Your account has been unlocked and you can now</span>,
    unlock_login: <span>You are already logged in. You need to logout before you can unlock an
      account.</span>,
    unlock_failed1: <span><h2> Account Unlock Failed </h2>Your account is either not locked, or has been locked again since
      you followed this link. If your account is unlocked, you can simply</span>,
    unlock_failed2: <span>Otherwise check your email. If you have forgotten your password you can make a</span>,
    unlock_failed3: <span>request to change your password</span>,

    //report_name

    repotname_title: <span>Abusive name report form.</span>,
    repotname_q1: <span>Why do you think this theorem name is abuvise?</span>,
    repotname_q2: <span>Your Email address:</span>,
    repotname_button: <span>Report</span>,

    //change_pass

    changepass_invalid: <span>You have used an invalid code or email address. Perhaps this was a code from an old attempt
      to change your password.If you need to change your password, please enter your email address below and click on
      the "Request password change" button.</span>,
    changepass_emailsent1:
      <span>An email has been sent to </span>,
    changepass_emailsent2:
      <span>with a link that will allow your to change your password.</span>,
    changepass_passchanged:
      <span>Your password has been changed!</span>,
    changepass_login:
      <span>You can now login.</span>,

    changepass_blankpass:
      <span>You have to enter a blank password!</span>,
    changepass_doit:
      <span>You can now change your password.</span>,
    changepass_newpass:
      <span>Type in your new password:</span>,
    changepass_returnlogin:
      <span>Return to login page</span>,
    changepass_title:
      <span>This page allows you to request a change your TheoryMine password.</span>,
    changepass_p:
      <span>Once you have requested to change your password, we will email you with a special link that will let you type
        in a
        new password for your account.</span>,
    changepass_loginasnormal:
      <span>login as normal.</span>,
    changepass_enteremail:
      <span>Enter the email address of your TheoryMine account</span>,
    changepass_requestpass:
      <span>Request password change</span>,

    //gadgets

    gadgets_title:
      <span>Gift Items for:</span>,
    gadgets_p1:
      <span>You can now purchase TheoryMine T-shirts, mouse-pads and mugs!<br>All gift items are provided by <a
        href="http://www.zazzle.com/" target="_blank">Zazzle</a> but are personalized with your TheoryMine
        theorems.'</br></span>,
    gadgets_p2: <span>You can then choose which country you want your items to be shipped from (by choosing the
      closest
      country to you, you might get cheaper shipping costs). It is then possible to visit the TheoryMine gift shop
      where
      you can purchase items personalized with your selected theorem! Pick from lots of different styles, colors
      and
      sizes and costumize your items!</span>,
    gadgets_p3: <span>For more informations on your purchase please refer to the instructions <a
      href="http://www.zazzle.com" target="_blank">Zazzle</a> and to their <a
      href="http://www.zazzle.co.uk/mk/policy/user_agreement" target="_blank">User Agreement</a> and <a
      href="http://www.zazzle.co.uk/mk/policy/privacy_policy" target="_blank">privacy policy</a>.</span>,
    gadgets_wherefrom: <span>Please select which country you would like to get your items shipped from:</span>,
    gadgets_selection: <span>You have selected:</span>,
    gadgets_go: <span>Go to the shop!</span>,
    gadgets_northamerica: "North America",
    gadgets_canada: "Canada",
    gadgets_usa: "U.S.A",
    gadgets_europe: "Europe",
    gadgets_austria: "Austria",
    gadgets_belgium: "Belgium",
    gadget_france: "France",
    gadgets_germany: "Germany",
    gadgets_netherlands: "Netherlands",
    gadgets_portugal: "Portugal",
    gadgets_spain: "Spain",
    gadgets_sweden: "Sweden",
    gadgets_swiz: "Switzerland",
    gadgets_uk: "U.K.",
    gadgets_asia: "Asia/Pacific",
    gadgets_australia: "Australia",
    gadgets_japan: "Japan",
    gadgets_newz: "New Zealand",
    gadgets_latin: "Latin America",
    gadgets_brazil: "Brazil",
    gadgets_other: "Other",
    //login

    login_title: <span>Login to TheoryMine</span>,
    login_failed: <span>Login failed, check your email address/login name and re-enter your password.</span>,
    login_resetpassword: <span>reset your password</span>,
    login_waiting_email: <span>You need to read your email, you have been emailed a link that you need in order to
      login.</span>,
    login_noaccount: "Don't have an account?",
    login_pass_forgot: <span>forgot your password? </span>,

    //register

    register_title: 'Register with TheoryMine',
    register_missing_entry: <span>Please fill the fields marked with * and re-enter your password.</span>,
    register_mismatch: 'Your passwords did not match, please re-enter it',
    register_too_short: 'Your password must be at least 8 characters long',
    register_no_numbers: 'Your password must contain at least a number',
    register_no_letters: 'Your password must contain at least a letter',
    register_privacy: <span>Information on how we use the personal data that you submit on our site is contained in
      our
      privacy and cookie policy</span>,
    register_retype1: 'Retyped password:',
    register_retype2: <span>please retype your password here</span>,
    register_nearly:
      <span>Thank you, registration is nearly complete. An email has been sent to: </span>,
    register_checkemail: <span>The next thing you need to do is check your email. The email contains a link to
      unlock
      your account and complete the registration process. </span>,

    //profile

    profile_login: <span>You need to login to access you TheoryMine profile</span>,
    profile_enterpass: <span>You need to enter your password to update your details.</span>,
    profile_wrongpass: <span>The password you enetred did not match your old password, enter your old password to
      update
      your details. </span>,
    profile_edit: <span>Edit Your Details:</span>,
    profile_needto: <span>To make changes you need to enter your </span>,
    profile_good: <span>Details updated</span>,
    profile_return: <span>Return to overview</span>,
    profile_details: <span>Your Details:</span>,
    profile_changepass: <span>(You can also change your password)</span>,

    //contact

    contact_title: <span>Contact Us:</span>,

    logout: <span>You are now logged out.</span>,

    ///*******COMMON PARTS*************///

    //dicovered_theorems

    dicoveredthm_one: <span>You have named one theorem</span>,
    dicoveredthm_younamed: <span>You have named </span>,
    dicoveredthm_viewcert: <span>View Certificate</span>,
    dicoveredthm_viewbro: <span>View Brochure</span>,
    dicoveredthm_shop: <span>Gift Items Shop</span>,

    //dicoveries-in-progress

    progress_none: <span>You have no discoveries in progress, would you like to name a new theorem?</span>,
    progress_one: <span>You have one discovery in progress:</span>,
    progress_youhave: <span>You have </span>,
    progress_ndisc: <span>discoveries in progress:</span>,
    progress_placedon: <span>This order was placed on </span>,
    progress_ordid: <span>and has order-id:</span>,

    //footer

    footer_tc: 'Terms & Conditions',
    footer_contact: 'Contact Us',
    footer_privacy: 'Privacy Policy',
    footer_cancellations: 'Cancellations',
    footer_questions: 'Got a question about TheoryMine? Email us at',

    //header

    header_tagline: <span>Personalized mathematical theorems</span>,
    header_next: <span>you could be next!</span>,
    header_clear: <span>clear messages</span>,

    //main_links_header

    links_loggedin: 'Logged in as ',
    links_profile: 'Profile',
    links_logout: 'Logout',
    links_login: 'Login',
    links_home: 'Home Page',
    links_disc: 'Name a Theorem',
    links_faq: 'F.A.Q.',
    links_about: 'About Us',
    links_gift: 'Gift Packs',
    links_test: 'Testimonials',

    //question-mark

    questionmark: <span>This is the name that will be given to your theorem forever. < br/> It can be either a name, a nick
      name or any other thing as long as it meets the following criteria:
      <br/> < br/> - It must be a no more than 30 characters long. <br/> - It must NOT be inappropriate,
      libellous, defamatory, blasphemous, obscene, offensive to public morality or an incitement to racial hatred or
      terrorism. <br/> < br/> Theorems names will be filtered and if reported and recognised to be inappropriate, they
      will be removed from our database and records without refund. </span>,

///*******EMAIL*************/
//

    //general

    login: 'log-in'
    ,
    faq:
      'f.a.q'
    ,
    letusknow:
      'let us know'
    ,
    register:
      'Register'
    ,
    theorems:
      'theorems'
    ,
    email:
      'Email Address'
    ,
    firstname:
      'First Name'
    ,
    lastname:
      'Last Name'
    ,
    cancel:
      'Cancel'
    ,
    password:
      'Password'
    ,
    select:
      'Select'
    ,
    edit_details:
      'Edit Details'
    ,
    change_password:
      'Change Password'
    ,
    update: "Update my details",
    submit: 'Submit',
    next: 'Next',
    accept_conditions: <span>I have read and accept TheoryMine's
      <Link to={pagesUrls.termsAndConditions}> Terms and Conditions</Link> and
      <Link to={pagesUrls.privacyPolicy}> Privacy Policy</Link>
    </span>,
    submit_payment: 'Submit Payment',
    please_login: <span>Please <Link to={pagesUrls.login}>log in </Link> or <Link to={pagesUrls.register}>register</Link> before proceeding with your order.</span>,

    ///*******ERRORS*************/
    //

    err_empty: 'Please enter a value for this field',
    err_accept_t_anc_c: 'Please agree to our Privacy Policy and Terms of Use to register.'

  }
}

export const local = localisation[ 'EN-GB' ]