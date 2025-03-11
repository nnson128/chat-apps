package com.sonnguyen.chat_server.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.cassandra.core.cql.Ordering;
import org.springframework.data.cassandra.core.cql.PrimaryKeyType;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyClass;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyColumn;

import java.util.UUID;

@PrimaryKeyClass
@Setter
@Getter
public class ChannelMessageKey {
    @PrimaryKeyColumn(name = "channel_id", ordinal = 0, type = PrimaryKeyType.PARTITIONED)
    private UUID channelId;
    @PrimaryKeyColumn(name = "message_id", ordinal = 1, type = PrimaryKeyType.CLUSTERED, ordering = Ordering.DESCENDING)
    private UUID messageId;

}