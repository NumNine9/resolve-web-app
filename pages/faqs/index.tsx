// import DefaultLayout from "@/layouts/default";
import DefaultLayout from "@/layouts/default";
import React from "react";

export default function DocPage(){
    const faqs = [
        {
          id: 1,
          question: "What’s the minimum requirements?",
          answer: "There is no minimum requirement needed.",
          href: "https://en.wikipedia.org/wiki/Zimbabwe",
        },
        {
          id: 2,
          question: "What courses does the platform offer?",
          answer: "We offer a variety of courses, from programming and design to business and language skills.",
          href: "https://en.wikipedia.org/wiki/Computer_programming",
        },
        {
          id: 3,
          question: "How do I sign up?",
          answer: "Simply click the 'Sign Up' button at the top right of the page, fill in your details, and you're ready to start learning!",
          href: "https://en.wikipedia.org/wiki/Web_form",
        },
        {
          id: 4,
          question: "Is there a free trial available?",
          answer: "Yes, we offer a 7-day free trial so you can explore our courses before committing to a subscription.",
          href: "https://en.wikipedia.org/wiki/Free-to-play",
        },
        {
          id: 5,
          question: "Can I earn certificates for completing courses?",
          answer: "Absolutely! All our courses provide a certificate upon successful completion to showcase your achievement.",
          href: "https://en.wikipedia.org/wiki/Academic_certificate",
        },
        {
          id: 6,
          question: "Are the courses self-paced?",
          answer: "Yes, our courses are designed to be self-paced, allowing you to learn at a time and speed that suits you.",
          href: "https://en.wikipedia.org/wiki/E-learning",
        },
        {
          id: 7,
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards, PayPal, and other popular payment methods for your convenience.",
          href: "https://en.wikipedia.org/wiki/E-commerce_payment_system",
        },
        {
          id: 8,
          question: "How can I contact support?",
          answer: "You can reach our support team 24/7 via email or live chat for assistance with any issues.",
          href: "https://en.wikipedia.org/wiki/Technical_support",
        },
      ];
    return (
        <DefaultLayout>
            <section >

                <main className="faqs">
                    
            <div id='faqs' className='max-w-2xl divide-y divide-gray-900/10 dark:divide-gray-200/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8'>
      <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white'>
        Frequently asked questions
      </h2>
      <dl className='mt-10 space-y-8 divide-y divide-gray-900/10'>
        {faqs.map((faq) => (
          <div key={faq.id} className='pt-8 lg:grid lg:grid-cols-12 lg:gap-8'>
            <dt className='text-base font-semibold leading-7 text-gray-900 lg:col-span-5 dark:text-white'>
              {faq.question}
            </dt>
            <dd className='flex items-center justify-start gap-2 mt-4 lg:col-span-7 lg:mt-0'>
              <p className='text-base leading-7 text-gray-600 dark:text-white'>{faq.answer}</p>
              {faq.href && (
                <a href={faq.href} className='text-base leading-7 text-yellow-500 hover:text-yellow-600'>
                  Learn more →
                </a>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
                  
        </main >
            </section>
        
            
        </DefaultLayout>
    )
}