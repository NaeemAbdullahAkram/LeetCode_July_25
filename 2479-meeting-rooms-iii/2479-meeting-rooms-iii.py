import heapq
from collections import defaultdict
from typing import List

class Solution:
    def mostBooked(self, n: int, meetings: List[List[int]]) -> int:
        meetings.sort()

        available = list(range(n))
        heapq.heapify(available)
        ongoing = []

        room_meeting_count = [0] * n

        for start, end in meetings:
            while ongoing and ongoing[0][0] <= start:
                end_time, room = heapq.heappop(ongoing)
                heapq.heappush(available, room)

            if available:
                room = heapq.heappop(available)
                heapq.heappush(ongoing, (end, room))
            else:
                end_time, room = heapq.heappop(ongoing)
                duration = end - start
                new_end = end_time + duration
                heapq.heappush(ongoing, (new_end, room))

            room_meeting_count[room] += 1

        max_meetings = max(room_meeting_count)
        for i, count in enumerate(room_meeting_count):
            if count == max_meetings:
                return i
                