
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Tue, 19 Mar 2024 17:00:44 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
TokenColorBaseWhite,
TokenColorBaseRed,
TokenColorBaseGreen,
TokenColorBaseSuccess
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
