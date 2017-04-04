# Why?

Need to paraphrase everything (lol...)

As video games are becoming more and more complex and are reaching a broader audience, there is an increasing interest in procedures to analyze player behavior and the impact of design decisions. Game companies traditionally relied on user-testing methods, like playtesting, surveys or videotaping, to obtain player feedback. (Wallner & Kriglstein 2013)

Gameplay metrics are usually stored in textual form in game logs or relational database systems which need to be processed and analyzed in some way. Traditionally, purely statistical ap- proaches (see, e.g., [24–26]) were used [2,5]. However, the inter- pretation of the data can be difficult, e.g., because of missing expertise with statistical methods. Therefore additional ap- proaches are necessary to support the analysis of gameplay data. The literature review showed us that there is an increasing interest in visualizations because they can help developers to analyze large amounts of multi-dimensional data and enable them to gain valu- able knowledge in order to understand player behavior (e.g., by visualizing player traces) and to discover patterns of what players are doing over time (e.g., by analyzing occurrence, context and fre- quency). Graphical representations of gameplay data make things visible or present things in a new light of which users were not aware of before and therefore support them in their decisions to improve the game [1,27]. (Wallner & Kriglstein 2013)

Based on these observations we want to give researchers and practitioners a state-of-the-art overview about different aspects for the analysis and particularly for the visualization of gameplay data. In the following sections we shortly discuss the various appli- cation areas of game metrics, present our attempt to categorize vi- sual methods for analyzing gameplay data, provide detailed descriptions and examples for each category and discuss open problems and topics for possible future work. (Wallner & Kriglstein 2013)

It has been recently reported that around 40% of Internet users play some form of an online game (http://www.develop-online.net/news/36618/40-of-all-internet-users-play-online-games). Among the games, Massively Multiplayer Online Role-Playing Games (MMORPGs for short), perhaps the most sophisticated and complex, are known to be enjoyed by a dedicated base composed of no less than 20 million people worldwid (http://www.brighthub.com/video-games/mmo/articles/35992.aspx). An MMOPRG typically features a real world-like arena set in a fantastical age in which gamers engage in a variety of interactions with other players through battles and commerce (e.g., exchange or sales of valuable items), or purely recreational activities. The existence of a large dedicated fan base is attributed to the engrossing and persistent nature of MMORPGs, the players being able to groom their characters over a time span of many months or years. (Korean Paper...)

Further, we identified possible directions for future research. Gameplay metrics analysis offers a rich and interesting field for re- search which goes beyond the mere application of statistical methods. (Wallner & Kriglstein 2013)

Playing computer games has become a social experience. Hundreds of thousands of players interact in massively multiplayer online games (MMORPG), a recent and successful genre descending from the pioneering multi-user dungeons (MUDs). These new games are purposefully designed to encourage interactions among players, but little is known about the nature and structure of these interactions. In this paper, we analyze player-to-player interactions in two locations in the game Star Wars Galaxies. We outline different patterns of interactivity, and discuss how they are affected by the structure of the game. We conclude with a series of recommendations for the design and support of social activities within multiplayer games. (The social side of gaming: a study of interaction patterns in a massively multiplayer online game)


#### Some visualization tools out there
Several visualization tools (e.g., Data Cracker [9], Lithium [28], PlayerViz [1] or Playtracer [5]) have been developed in the last years with the goal to assist the analytical process. Such visualization tools range from simple representa- tions like bar charts of a single variable (e.g., level completion times) to complex systems that consider different visualization techniques (e.g., maps in combination with player path representation).


#### Shortcomings and limitations

However, these qualitative methods for data collection are time-consuming and the obtained data is often incomplete or subjective. Therefore, instrumentation became popular in recent years to unobtrusively obtain the detailed data required to thoroughly evaluate player behavior. To make sense of the large amount of data, appropriate tools and visualizations have been developed. (Wallner & Kriglstein 2013)

Even though gameplay metrics analysis has many advantages it does not provide reliable information about why a player is doing something [2–4,21,22]. In other words, game metrics fail to pro- vide context, e.g., whether a player is having fun or not. However, as Lynn [22] points out, why can sometimes be the most important question. Canossa and Cheong [23] also emphasize that the re- corded behavior is not necessarily an expression of the player’s personality and intention. Several authors (e.g., [2,4,21]) therefore recommend to combine telemetry analysis with qualitative user research methods to get the best of both worlds. (Wallner & Kriglstein 2013)

Large game companies, like Microsoft, are able to mine enormous amounts of data not only for specific games but also across games via services such as Xbox Live (see, e.g., [101]). This is something that is usually not possible for independent research- ers. Fortunately, some game developers have started to provide public application programming interfaces (APIs) to access in- game telemetry data. Examples include the API for the game Spore [117,118] from Maxis, the BF3 Stats API [119] to access sta- tistics from Battlefield 3 and the World of Warcraft API [120]. While Bowman et al. [40] highlight the benefits of such APIs for community building, especially the latter API has become a favorite for the research community as evidenced by the number of publications on World of Warcraft ([32,98,100] are a few examples which are also concerned with visualization). (Wallner & Kriglstein 2013)

#### Interesting point

In recent years, some developers like Valve [20] have therefore started to view games as a service rather than as a product. (??? cited in Wallner & Kriglstein 2013)




