## This script aims to figure out what teams your initial draft picks team correlates with.
## The example below is for Justin Jeffersion in the 1st round.  
## Your team is now MIN and you want to try to actively pick players that play againts the vikings when it matters.
## Correlation reason gives you how they are related
## Ive also added a correlation weight as they are not all equal.
## IMO 17 > 16 > 15 > Division > Same place Division

SET @team = 'MIN';
SET @conference = 	(SELECT conference		from TEAM_INFO ti where ti.abbrv = @team);
SET @division 	= 	(SELECT division 		from TEAM_INFO ti where ti.abbrv = @team);
SET @finished 	= 	(SELECT Finished 		from TEAM_INFO ti where ti.abbrv = @team);

-- SELECT @team, @conference, @division, @finished;


SELECT 
	fullName as Correlations,
	t.abbrv as Abbreviation,
	(CASE 
		WHEN REPLACE(s.15,'@','') = @team THEN 'Week 15' 
		WHEN REPLACE(s.16,'@','') = @team THEN 'Week 16' 
		WHEN REPLACE(s.17,'@','') = @team THEN 'Week 17' 
		WHEN t.finished = @finished then 'Same Finish in 2023 (Will play in 2024)' 
		WHEN t.division = @division then 'Same Division' 
		ELSE 'Nope' 
		END) as CorrelationReason,
	(CASE 
		WHEN REPLACE(s.17,'@','') = @team THEN '1'
		WHEN REPLACE(s.16,'@','') = @team THEN '2'
		WHEN REPLACE(s.15,'@','') = @team THEN '3' 
		WHEN t.division = @division then '4'  		 
		WHEN t.finished = @finished then '5' 		
		ELSE '10' 
		END) as CorrelationWeight,				
	t.conference ,
	t.division ,
	t.Finished,
	t.teamcolor1,
	t.teamcolor2 
FROM 
	ydkb.TEAM_INFO t
INNER JOIN 
	SCHEDULE s on s.Team = t.abbrv
WHERE 
-- 		REPLACE(s.15,'@','') = @team 
-- 	OR 
-- 		REPLACE(s.16,'@','') = @team 
-- 	OR 
-- 		REPLACE(s.17,'@','') = @team 
-- 	OR
		@division = t.division AND @conference = t.conference AND @team <> t.abbrv 
	OR 
		@finished = t.Finished AND @conference = t.conference AND @division <> t.division AND @team <> t.abbrv 
ORDER BY CorrelationWeight ASC 
;
