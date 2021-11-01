import React, { useEffect } from "react";
import "./WorkDetails.css";
const SellDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="selldetails_section navSpace">
      <div className="selldetails_header">
        <div>
          <h1>How to Get Your House Ready to Sell</h1>
        </div>
      </div>
      <div className="selldetails_wrapper">
        <p>
          Whether it’s a family home that you’ve inherited or a home where
          you’ve raised a family and created memories, letting go of a property
          can be an emotional experience. It’s important to carefully select a
          real estate agent with experience selling properties in your area and
          in a similar price range. A good place to start is reading reviews of
          agents online, and asking friends and family for recommendations. Your
          agent will evaluate your situation and help you prepare to sell your
          house, including identifying improvements that will increase your
          home’s value, getting professional photos taken of your home, and
          deciding on a listing price.
        </p>
        <span>How to Make Your House Ready to Sell</span>
        <p>
          Discuss simple improvements with your agent that are cost-effective
          and will increase the value of your home, such as pressure-washing or
          painting your home’s exterior, tidying up your landscaping, replacing
          your front door, and other easy tasks. If your home is in serious
          disrepair, however, with issues such as an outdated roof, it might be
          a good idea to take on a larger project to increase your home’s value.
          Your agent will be able to help you decide if it’s worth it to pay for
          a major project now in order to sell your home for a higher price
          later.
        </p>
        <span>Checklist for Getting Your House Ready to Sell</span>
        <p>
          Ultimately, there are several steps in the process of getting your
          house ready to sell. This checklist outlines the essential steps and
          considerations to prepare for selling your property.
        </p>
        <span>1. Determine whether it’s a good time to sell.</span>
        <p>
          Market conditions fluctuate regularly, and homes generally move faster
          in some areas during certain times of the year. Research market
          conditions and find a few local, comparable homes that have recently
          sold as a benchmark to get an idea of the market conditions. You can
          read about the latest real estate market conditions and trends on the
          Redfin Blog; you can also see what the median home sale price is in
          your area on the Redfin Data Center.
        </p>
        <span>
          2. Find out if it’s financially feasible for you to sell your home.
        </span>
        <p>
          In less-than-ideal market conditions, you might find out that the
          market value of your home is less than the remaining balance on your
          mortgage.
        </p>
        <span>3. Make updates and repairs to improve your home’s value.</span>
        <p>
          Evaluate the main structures of your home and take care of any
          pressing problems, such as leaking pipes, cracked windows, or other
          concerns that could turnoff potential buyers.
        </p>
        <span>4. Clean and declutter.</span>
        <p>
          Rooms will look larger if there’s less stuff in them. You might
          consider renting a storage unit to temporarily store all but the most
          critical pieces of furniture and decor. But don’t go overboard; it’s
          better to leave some furniture in the room than to have it completely
          empty, so potential buyers can imagine where their furniture would go.
        </p>
        <span>5. Focus on curb appeal..</span>
        <p>
          Keep your lawn mowed, your hedges trimmed, and consider adding flower
          beds for a bit of color. Replace your mailbox if it is damaged or in
          poor condition. Consider painting or replacing your front door. Check
          out our home staging tips for more information.
        </p>
        <span>6. Schedule a professional photo shoot.</span>
        <p>
          The majority of potential buyers will see your home online before they
          see it in person, and first impressions are important. One Redfin
          study found that homes with professional listing photos sell for
          $3,400 to $11,200 more than their list price.
        </p>
        <span>7. Decide on a competitive asking price.</span>
        <p>
          A competitive listing price is one that is similar to listing prices
          of comparable homes on the market (or those that have recently sold),
          yet high enough that you’ll make a healthy profit.
        </p>
        <span>8. Discuss home tours and open houses with your agent.</span>
        <p>
          Let your agent know when it’s ok to let people into your home to see
          it, and decide on a date for an open house, if that’s what your agent
          recommends.
        </p>
        <span>9. Let your agent take it from there.</span>
        <p>
          They’ll put your home on the multiple listing service in your area,
          which will get it on sites like Redfin.com and in front of other
          agents. They’ll also order and place a “for sale” sign in your yard,
          so passerbys will know. They’ll also start to market the property to
          potential buyers, via flyers, online advertising and other means
        </p>
        <span>10. Start looking for your next home.</span>
        <p>
          In the event that your home sells quickly, you’ll need to be ready to
          move. Here’s our advice on navigating the tricky situation of selling
          your home and buying a new one all at the same time.
        </p>
      </div>
    </div>
  );
};

export default SellDetails;
